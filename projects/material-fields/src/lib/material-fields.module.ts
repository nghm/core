import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatFormField, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DEFAULT_INPUT_COMPONENT_TYPE } from '@nghm/forms';
import { TextInputComponent } from './components/text-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
  entryComponents: [TextInputComponent],
  providers: [
    { provide: DEFAULT_INPUT_COMPONENT_TYPE, useValue: { type: 'text', inputType: TextInputComponent }, multi: true }
  ]
})
export class MaterialFieldsModule { }
