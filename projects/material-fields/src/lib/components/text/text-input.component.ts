import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
