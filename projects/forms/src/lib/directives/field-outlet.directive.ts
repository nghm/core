import { Directive, Input, Injector, ViewContainerRef, Inject, Optional } from '@angular/core';
import { InputConfiguration } from '../components/field-configuration/input-configuration';
import { FormControlFactory } from '../services/form-control.factory';
import { ProxyInjectorFactory } from '../services/proxy-injector.factory';
import { InputComponentFactoryResolver } from '../services/input-component-resolver.factory';
import { PARENT_FORM } from '../components/form/parent-form';
import { NgForm } from '@angular/forms';
import { FieldConfiguration } from '@nghm/forms';

@Directive({
  selector: '[hmFieldOutlet]'
})
export class FieldOutletDirective {
  @Input() set hmFieldOutlet(inputConfiguration: InputConfiguration) {
    if (!inputConfiguration) {
      return;
    }

    const inputFactory = this.inputComponentFactoryResolver.resolve(inputConfiguration.type);
    const formControl = this.formControlFactory.make(inputConfiguration);

    this.hmForm.ngForm.control.addControl(inputConfiguration.name, formControl);

    const prxoyInjector = this.proxyInjectorFactory.make(this.injector, {
      provide: FieldConfiguration,
      useValue: { formControl }
    });
    this.viewContainerRef.createComponent(inputFactory, 0, prxoyInjector);
  }

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private formControlFactory: FormControlFactory,
    private proxyInjectorFactory: ProxyInjectorFactory,
    private inputComponentFactoryResolver: InputComponentFactoryResolver,
    @Inject(PARENT_FORM) @Optional() private hmForm: { ngForm: NgForm }
  ) {}
}
