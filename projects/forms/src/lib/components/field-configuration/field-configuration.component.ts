import { Directive, Input, Host } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Directive({
  selector: 'hm-field[hmOverrideFieldNamed]'
})
export class OverrideFieldNamedDirective {
  @Input() named: string;

  constructor(@Host() private fieldConfiguration: FieldComponent) {}
}
