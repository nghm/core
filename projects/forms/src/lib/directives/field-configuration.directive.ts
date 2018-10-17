import { Directive, Attribute } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'hm-form-field[named]'
})
export class OverrideFieldNamedDirective {
  constructor(@Attribute('named') public named: string) {}
}
