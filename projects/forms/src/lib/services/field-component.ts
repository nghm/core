import { FieldConfiguration } from './field-configuration';
import { TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

export class FieldComponent {
  name: string;
  errorTemplateRef: TemplateRef<string>;
  formControl: FormControl;
  labelTemplateRef: TemplateRef<string>;

  get errors(): Array<{name: string, value: any }> {
    const keys = Object.keys(this.formControl.errors);

    return keys.reduce((acc, name) => [...acc, { name, value: this.formControl[name] }], []);
  }

  constructor({ name, errorTemplateRef, formControl, labelTemplateRef }: FieldConfiguration) {
    this.name = name;
    this.errorTemplateRef = errorTemplateRef;
    this.formControl = formControl;
    this.labelTemplateRef = labelTemplateRef;
  }
}
