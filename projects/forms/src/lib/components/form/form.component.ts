import { Component, Input, QueryList, ContentChildren, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { InputConfiguration } from '../field-configuration/input-configuration';
import { PARENT_FORM } from './parent-form';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FieldConfigurationComponent } from '../field-config/field-config.component';

@Component({
  selector: 'hm-form',
  templateUrl: 'form.component.html',
  providers: [{ provide: PARENT_FORM, useExisting: FormComponent }]
})
export class FormComponent {
  fields: Iterable<Observable<InputConfiguration>>;

  private _action: Function;

  private _fieldOverrides: { [name: string]: Observable<InputConfiguration> };
  private _remoteConfigurations: { [name: string]: InputConfiguration };

  @ViewChild(NgForm) ngForm: NgForm;

  @ContentChildren(FieldConfigurationComponent)
  set fieldConfigurations(fc: QueryList<FieldConfigurationComponent>) {
    if (!fc) {
      return;
    }

    const fieldConfigurations = {};

    fc.forEach(({ name, override, inputConfiguration }) => {
      if (!override) {
        fieldConfigurations[name] = inputConfiguration;
      } else {
        fieldConfigurations[override.named] = inputConfiguration;
      }
    });

    this._fieldOverrides = fieldConfigurations;

    if (this._remoteConfigurations) {
      this.fields = Array.from(this.computeFields());
    }
  }

  @Input()
  set action(action: Function & { fields?: any }) {
    if (!action) {
      this._action = this.fields = undefined;

      return;
    }

    this._action = action;
    this._remoteConfigurations = action.fields;

    this.fields = Array.from(this.computeFields());
  }

  * computeFields()
      : Iterable<Observable<InputConfiguration>> {
    const {
      _fieldOverrides: localConfigurations$ = {},
      _remoteConfigurations: remoteConfigurations = {}
    } = this;

    const remoteNames = Object.keys(remoteConfigurations);
    const localNames = Object.keys(localConfigurations$);
    const names = this.unique(remoteNames.concat(localNames));

    for (const name of names) {
      const remote = remoteConfigurations[name];
      const override = localConfigurations$[name];

      if (override) {
        yield override.pipe(
          map(local => ({ ...remote, ...local }))
        );
      } else {
        return of(remote);
      }
    }
  }

  unique(array: Array<any>): Array<any> {
    return array.filter((value, index) => index === array.indexOf(value));
  }

  onSubmit(event) {
    event.preventDefault();

    const { value, valid } = this.ngForm;

    if (valid) {
      this._action(value);
    }
  }
}
