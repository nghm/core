import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { FieldConfigurationComponent } from './components/form-field/form-field.component';
import { OverrideFieldNamedDirective } from './components/field-configuration/field-configuration.component';

import { InputComponentFactoryResolver } from './services/input-component-resolver.factory';
import { FormControlFactory } from './services/form-control.factory';
import { ProxyInjectorFactory } from './services/proxy-injector.factory';
import { FieldOutletDirective } from './directives/field-outlet.directive';
import { FieldLabelDirective } from './directives/field-label.directive';
import { FieldErrorDirective } from './directives/field-error.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';

const COMPONENTS =  [
  FieldLabelDirective,
  FieldErrorDirective,
  FormSubmitDirective,
  OverrideFieldNamedDirective,
  FormComponent,
  FieldConfigurationComponent,
  FieldOutletDirective
];

@NgModule({
  imports: [CommonModule, NgFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [InputComponentFactoryResolver, FormControlFactory, ProxyInjectorFactory]
})
export class FormsModule { }
