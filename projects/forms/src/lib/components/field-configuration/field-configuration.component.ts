import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'hm-form-field[hmFieldNamed]'
})
export class OverrideFieldNamedDirective {
  @Input() hmFieldNamed: string;

  get named() { return this.hmFieldNamed; }
}
