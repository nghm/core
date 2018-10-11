import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-password-input',
  templateUrl: './password-input.component.html'
})
export class PasswordInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
