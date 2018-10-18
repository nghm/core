import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-select-input',
  templateUrl: './select-input.component.html'
})
export class SelectInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
