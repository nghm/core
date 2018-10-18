import { FieldConfiguration } from './field-configuration';
import { TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

export class FieldComponent {
  name: string;
  errorTemplateRef: TemplateRef<string>;
  formControl: FormControl;
  labelTemplateRef: TemplateRef<string>;

  get invalid(): boolean {
    return this.formControl.invalid && this.formControl.dirty;
  }

  get errors(): Array<{name: string, value: any }> {
    const keys = Object.keys(this.formControl.errors);

    return keys.reduce((acc, name) => [...acc, { name, value: this.formControl[name] }], []);
  }

  get options(): Array<{name: string, value: any }> {
    return this.formControl['options'];
  }

  constructor({ name, errorTemplateRef, formControl, labelTemplateRef }: FieldConfiguration) {
    this.name = name;
    this.errorTemplateRef = errorTemplateRef;
    this.formControl = formControl;
    this.labelTemplateRef = labelTemplateRef;
  }
}
