import { TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

export class FieldConfiguration {
  labelTemplateRef: TemplateRef<string>;
  formControl: FormControl;
}
