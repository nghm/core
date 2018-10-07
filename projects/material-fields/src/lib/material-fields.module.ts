import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DEFAULT_INPUT_COMPONENT_TYPE } from '@nghm/forms';
import { TextInputComponent } from './components/text-input.component';
import { CheckboxInputComponent } from './components/checkbox-input.component';

const COMPONENTS = [TextInputComponent, CheckboxInputComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  entryComponents: COMPONENTS,
  providers: [
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'text', inputType: TextInputComponent }, multi: true },
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'boolean', inputType: CheckboxInputComponent }, multi: true }
  ]
})
export class MaterialFieldsModule { }
