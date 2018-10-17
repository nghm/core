import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-checkbox-input',
  templateUrl: './checkbox-input.component.html'
})
export class CheckboxInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
