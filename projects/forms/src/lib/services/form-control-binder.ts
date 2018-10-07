import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControlFactory } from './form-control.factory';
import { InputConfiguration } from '../components/field-configuration/input-configuration';

@Injectable()
export class FormControlBinder {
  constructor(private formControlFactory: FormControlFactory) {}

  bind(controlName: string, { control }: NgForm, inputConfiguration: InputConfiguration) {
    const formControl = this.formControlFactory.make(inputConfiguration);

    control.addControl(controlName, formControl);
  }
}
