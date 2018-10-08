import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { FieldConfigurationComponent } from './components/field-config/field-config.component';
import { OverrideFieldNamedDirective } from './components/field-configuration/field-configuration.component';

import { InputComponentFactoryResolver } from './services/input-component-resolver.factory';
import { FormControlFactory } from './services/form-control.factory';
import { ProxyInjectorFactory } from './services/proxy-injector.factory';
import { FieldOutletDirective } from './directives/field-outlet.directive';
import { FieldLabelDirective } from './directives/field-label.directive';

const COMPONENTS =  [
  FieldLabelDirective,
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
