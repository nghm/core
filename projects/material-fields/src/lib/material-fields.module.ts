import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DEFAULT_INPUT_COMPONENT_TYPE } from '@nghm/forms';
import { TextInputComponent } from './components/text-input.component';
import { CheckboxInputComponent } from './components/checkbox-input.component';
import { DatepickerInputComponent } from './components/datepicker-input.component';
import { PasswordInputComponent } from './components/password-input.component';

const COMPONENTS = [TextInputComponent, CheckboxInputComponent, PasswordInputComponent, DatepickerInputComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: COMPONENTS,
  providers: [
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'text', inputType: TextInputComponent }, multi: true },
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'boolean', inputType: CheckboxInputComponent }, multi: true },
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'password', inputType: PasswordInputComponent }, multi: true },
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'date', inputType: DatepickerInputComponent }, multi: true }
  ]
})
export class MaterialFieldsModule { }
