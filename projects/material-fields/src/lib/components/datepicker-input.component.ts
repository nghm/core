import { Component } from '@angular/core';
import { FieldConfiguration, FieldComponent } from '@nghm/forms';

@Component({
  selector: 'hm-mat-calendar-input',
  templateUrl: './datepicker-input.component.html'
})
export class DatepickerInputComponent extends FieldComponent {
  constructor(configuration: FieldConfiguration) { super(configuration); }
}
