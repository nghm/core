import { Directive, ViewContainerRef } from '@angular/core';
import { ComponentInstantiationInterceptor } from '../services/component-instantiation-interceptor';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'router-outlet',
  exportAs: 'hmRouterOutletInterceptor'
})
export class RouterOutletInterceptorDirective {
  constructor(
    interceptor: ComponentInstantiationInterceptor,
    viewContainerRef: ViewContainerRef
  ) {
    interceptor.registerContainer(viewContainerRef.injector['view'].component);
  }
}
