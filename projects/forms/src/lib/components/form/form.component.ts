import { Component, Input, QueryList, ContentChildren, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OverrideFieldNamedDirective } from '../field-configuration/field-configuration.component';
import { InputConfiguration } from '../field-configuration/input-configuration';
import { PARENT_FORM } from './parent-form';

@Component({
  selector: 'hm-form',
  templateUrl: 'form.component.html',
  providers: [{ provide: PARENT_FORM, useExisting: FormComponent }]
})
export class FormComponent {
  fields: Iterable<{ remote: InputConfiguration, override: InputConfiguration }>;

  private _action: Function;

  private _fieldOverrides: { [name: string]: InputConfiguration };
  private _remoteConfigurations: { [name: string]: InputConfiguration };

  @ViewChild(NgForm) ngForm: NgForm;

  @ContentChildren(OverrideFieldNamedDirective)
  set fieldConfigurations(fc: QueryList<OverrideFieldNamedDirective>) {
    if (!fc) {
      return;
    }

    const fieldConfigurations = {};

    fc.forEach(({ named, fieldConfiguration }) => {
      fieldConfigurations[named] = fieldConfiguration;
    });

    this._fieldOverrides = fieldConfigurations;

    this.fields = Array.from(this.computeFields());
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
      : Iterable<{ remote: InputConfiguration, override: InputConfiguration }> {
    const {
      _fieldOverrides: fieldOverrides = {},
      _remoteConfigurations: remoteConfigurations = {}
    } = this;

    const remoteNames = Object.keys(remoteConfigurations);
    // const localNames = Object.keys(fieldOverrides);
    const names = remoteNames;

    for (const name of names) {
      const remote = remoteConfigurations[name];
      const override = fieldOverrides[name];

      yield {
        remote, override
      };
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const { value, valid } = this.ngForm;

    if (valid) {
      this._action(value);
    }
  }
}
