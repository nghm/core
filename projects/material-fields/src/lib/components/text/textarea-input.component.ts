import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-textarea-input',
  templateUrl: './textarea-input.component.html'
})
export class TextareaInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
