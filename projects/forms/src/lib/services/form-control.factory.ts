import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { InputConfiguration } from '../interfaces/input-configuration';

@Injectable()
export class FormControlFactory {
  constructor(private formBuilder: FormBuilder) {

  }

  make({ value, required, pattern, max, min, maxLength, minLength, email, disabled }: InputConfiguration): FormControl {
    const validators = [];

    if (required) {
      validators.push(Validators.requiredTrue);
    }

    if (pattern) {
      validators.push(Validators.pattern(pattern));
    }

    if (max) {
      validators.push(Validators.max(max));
    }

    if (min) {
      validators.push(Validators.max(min));
    }

    if (maxLength) {
      validators.push(Validators.maxLength(maxLength));
    }

    if (minLength) {
      validators.push(Validators.minLength(minLength));
    }

    if (email) {
      validators.push(Validators.email);
    }

    const control = this
      .formBuilder
      .control(
        value,
        Validators.compose(validators)
      );

    if (disabled) {
      control.disable();
    }

    return control;
  }
}
