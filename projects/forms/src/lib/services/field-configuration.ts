import { TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

export class FieldConfiguration {
  labelTemplateRef: TemplateRef<string>;
  errorTemplateRefs: { [name: string]: TemplateRef<string> };
  formControl: FormControl;
  name: string;
}
