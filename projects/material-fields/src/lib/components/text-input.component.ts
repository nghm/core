import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hm-mat-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent {
  constructor(private formControl: FormControl) { }
}
