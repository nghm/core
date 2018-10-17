import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { COMPONENT_REGISTRATION, ComponentRegistration } from '@nghm/forms';
import { TextInputComponent } from './components/text/text-input.component';
import { CheckboxInputComponent } from './components/boolean/checkbox-input.component';
import { DatepickerInputComponent } from './components/date/datepicker-input.component';
import { PasswordInputComponent } from './components/password/password-input.component';
import { TextareaInputComponent } from './components/text/textarea-input.component';

const COMPONENTS = [TextInputComponent, TextareaInputComponent, CheckboxInputComponent, PasswordInputComponent, DatepickerInputComponent];

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
    {
      provide: COMPONENT_REGISTRATION,
      useValue: {
        pack: 'mat',
        name: 'text',
        type: 'text',
        inputType: TextInputComponent
      } as ComponentRegistration,
      multi: true },
    {
      provide: COMPONENT_REGISTRATION,
      useValue: {
        pack: 'mat',
        type: 'text',
        name: 'textarea',
        inputType: TextareaInputComponent
      } as ComponentRegistration,
      multi: true },
    {
      provide: COMPONENT_REGISTRATION,
      useValue: {
        pack: 'mat',
        name: 'checkbox',
        type: 'boolean',
        inputType: CheckboxInputComponent
      } as ComponentRegistration,
      multi: true },
    {
      provide: COMPONENT_REGISTRATION,
      useValue: {
        pack: 'mat',
        name: 'password',
        type: 'password',
        inputType: PasswordInputComponent
      } as ComponentRegistration,
      multi: true },
    {
      provide: COMPONENT_REGISTRATION,
      useValue: {
        pack: 'mat',
        name: 'date',
        type: 'date',
        inputType: DatepickerInputComponent
      } as ComponentRegistration,
      multi: true }
  ]
})
export class MaterialFieldsModule { }
