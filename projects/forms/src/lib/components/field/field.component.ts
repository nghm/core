import { Component, Input, OnChanges, SimpleChanges, Injector, ViewContainerRef, Optional, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import { FormControlFactory } from '../../services/form-control.factory';
import { ProxyInjectorFactory } from '../../services/proxy-injector.factory';
import { InputComponentFactoryResolver } from '../../services/input-component-resolver.factory';
import { InputConfiguration } from '../field-configuration/input-configuration';
import { PARENT_FORM } from '../form/parent-form';

@Component({
  selector: 'hm-field',
  templateUrl: './field.component.html'
})
export class FieldComponent implements InputConfiguration, OnChanges {
  @Input() name: string;
  @Input() value: any;
  @Input() type: string;

  @Input() required?: boolean;
  @Input() max?: number;
  @Input() min?: number;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() email?: boolean;
  @Input() pattern?: string;

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private formControlFactory: FormControlFactory,
    private proxyInjectorFactory: ProxyInjectorFactory,
    private inputComponentFactoryResolver: InputComponentFactoryResolver,
    @Inject(PARENT_FORM) @Optional() private hmForm: { ngForm: NgForm }
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('type' in changes) {
      if (!this.type) {
        return;
      }

      const inputFactory = this.inputComponentFactoryResolver.resolve(this.type);
      const formControl = this.formControlFactory.make(this);

      this.hmForm.ngForm.control.addControl(this.name, formControl);

      const prxoyInjector = this.proxyInjectorFactory.make(this.injector, {
        provide: FormControl,
        useValue: formControl
      });
      this.viewContainerRef.createComponent(inputFactory, 0, prxoyInjector);
    }
  }
}
