import { Directive, Input, Host } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Directive({
  selector: 'hm-field[hmOverrideFieldNamed]'
})
export class OverrideFieldNamedDirective {
  @Input() hmOverrideFieldNamed: string;

  get named() { return this.hmOverrideFieldNamed; }

  constructor(@Host() public fieldConfiguration: FieldComponent) {}
}
