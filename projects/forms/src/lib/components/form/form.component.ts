import { Component, Input, QueryList, ContentChildren, ViewChild, TemplateRef, ContentChild, AfterViewInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';

import { InputConfiguration } from '../../interfaces/input-configuration';
import { PARENT_FORM_GROUP } from '../../di/parent-form';
import { of, Observable, from } from 'rxjs';
import { map, mergeMap, scan, switchMap } from 'rxjs/operators';
import { FieldConfigurationComponent } from '../form-field/form-field.component';
import { FieldLabelDirective } from '../../directives/field-label.directive';
import { FieldErrorDirective } from '../../directives/field-error.directive';
import { FormSubmitDirective } from '../../directives/form-submit.directive';

export function formGroupFactory({ ngForm: { control }}) {
  return control;
}

@Component({
  selector: 'hm-form',
  templateUrl: 'form.component.html',
  providers: [{ provide: PARENT_FORM_GROUP, useFactory: formGroupFactory, deps: [FormComponent] }]
})
export class FormComponent implements AfterViewInit {
  inputConfigurations: Observable<{ name: string, configuration: InputConfiguration }[]> ;
  labels: { [name: string]: TemplateRef<any> } = {};
  errors: { [name: string]: TemplateRef<any> } = {};

  @ViewChild(NgForm) ngForm: NgForm;

  @ContentChild(FormSubmitDirective) submitDirective: FormSubmitDirective;

  @ContentChildren(FieldLabelDirective, { descendants: true }) set setLabels(labels: QueryList<FieldLabelDirective>) {
    if (!labels) {
      return;
    }

    this.labels = {};
    labels.forEach(({named, templateRef}) => {
      this.labels[named] = templateRef;
    });
  }

  @ContentChildren(FieldErrorDirective, { descendants: true }) set setErrors(errors: QueryList<FieldErrorDirective>) {
    if (!errors) {
      return;
    }

    this.errors = {};
    errors.forEach(({named, templateRef}) => {
      this.errors[named] = templateRef;
    });
  }

  @ContentChildren(FieldConfigurationComponent) fieldConfigurations: QueryList<FieldConfigurationComponent>;
  @Input() action: Function & { fields?: any };

  computeFields(
    remoteConfigurations: { [name: string]: InputConfiguration },
    localConfigurations$: { [name: string]: Observable<InputConfiguration> })
    : Observable<{ name: string, configuration: InputConfiguration }[]> {
    const remoteNames = Object.keys(remoteConfigurations);
    const localNames = Object.keys(localConfigurations$);
    const names = this.unique(remoteNames.concat(localNames));

    return from(names).pipe(
      mergeMap(name => {
        const remoteConfiguration = remoteConfigurations[name];

        return of(remoteConfiguration).pipe(
          switchMap(remote =>
            localConfigurations$[name] &&
            localConfigurations$[name].pipe(
              map(local => ({...remote, ...local})
              )
            ) ||
            [remote]
          )
        );
      }),
      scan((acc, configuration: InputConfiguration) => {
        const filtered = acc.filter(({name}) => name !== configuration.name);

        return [...filtered, { name: configuration.name, configuration }];
      }, [])
    );
  }

  unique(array: Array<any>): Array<any> {
    return array.filter((value, index) => index === array.indexOf(value));
  }

  submit() {
    const { value, valid } = this.ngForm;

    if (valid) {
      this.action(value);
    }
  }

  ngAfterViewInit(): void {
    if (!this.action || !this.fieldConfigurations) {
      return;
    }

    setTimeout(() => {
      const remoteConfigurations = this.action.fields.reduce((acc, field) => ({...acc, [field.name]: field}), {});
      const localConfiguration = {};

      this.fieldConfigurations.forEach(({ name, override, inputConfiguration }) => {
        if (!override) {
          localConfiguration[name] = inputConfiguration;
        } else {
          localConfiguration[override.named] = inputConfiguration;
        }
      });

      this.inputConfigurations = this.computeFields(remoteConfigurations, localConfiguration);
    });
  }

  propertyTracker(property): any {
    return (_, obj) => obj[property];
  }
}
