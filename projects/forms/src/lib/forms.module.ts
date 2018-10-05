import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { InputComponentFactoryResolver } from './services/input-component-resolver.factory';

@NgModule({
  imports: [CommonModule],
  declarations: [FormComponent, FieldComponent],
  exports: [FormComponent, FieldComponent],
  providers: [InputComponentFactoryResolver]
})
export class FormsModule { }
