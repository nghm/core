import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { OverrideFieldNamedDirective } from './components/field-configuration/field-configuration.component';

import { InputComponentFactoryResolver } from './services/input-component-resolver.factory';
import { FormControlFactory } from './services/form-control.factory';
import { ProxyInjectorFactory } from './services/proxy-injector.factory';

@NgModule({
  imports: [CommonModule, NgFormsModule],
  declarations: [FormComponent, FieldComponent, OverrideFieldNamedDirective],
  exports: [FormComponent, FieldComponent, OverrideFieldNamedDirective],
  providers: [InputComponentFactoryResolver, FormControlFactory, ProxyInjectorFactory]
})
export class FormsModule { }
