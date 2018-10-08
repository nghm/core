import { Directive, Input, Injector, ViewContainerRef, Inject, Optional, TemplateRef, ComponentRef } from '@angular/core';
import { FieldConfiguration } from '@nghm/forms';

import { InputConfiguration } from '../components/field-configuration/input-configuration';
import { FormControlFactory } from '../services/form-control.factory';
import { ProxyInjectorFactory } from '../services/proxy-injector.factory';
import { InputComponentFactoryResolver } from '../services/input-component-resolver.factory';
import { PARENT_FORM_GROUP } from '../components/form/parent-form';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[hmFieldOutlet]'
})
export class FieldOutletDirective {
  _componentRef: ComponentRef<any>;

  @Input() hmFieldOutletLabels: { [name: string]: TemplateRef<string> };
  @Input() hmFieldOutletErrors: { [name: string]: TemplateRef<string> };

  @Input() set hmFieldOutlet(inputConfiguration: InputConfiguration) {
    if (!inputConfiguration) {
      return;
    }

    const { name } = inputConfiguration;
    const inputFactory = this.inputComponentFactoryResolver.resolve(inputConfiguration.type);
    const formControl = this.formControlFactory.make(inputConfiguration);

    const labelTemplateRef = this.hmFieldOutletLabels && this.hmFieldOutletLabels[name] || this.hmFieldOutletLabels['*'];
    const errorTemplateRef = this.hmFieldOutletErrors && this.hmFieldOutletErrors[name] || this.hmFieldOutletErrors['*'];

    this.control.addControl(inputConfiguration.name, formControl);

    const proxyInjector = this.proxyInjectorFactory.make(this.injector, {
      provide: FieldConfiguration,
      useValue: {
        formControl,
        labelTemplateRef,
        errorTemplateRef,
        name
      }
    });

    this._componentRef = this.viewContainerRef.createComponent(inputFactory, 0, proxyInjector);
  }

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private formControlFactory: FormControlFactory,
    private proxyInjectorFactory: ProxyInjectorFactory,
    private inputComponentFactoryResolver: InputComponentFactoryResolver,
    @Inject(PARENT_FORM_GROUP) @Optional() private control: FormGroup
  ) { }
}
