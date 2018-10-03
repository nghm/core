import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { ComponentInstantiationInterceptor } from './services/component-instantiation.interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { MetaBindersProvider } from './services/meta-binders-provider';
import { CurrentResolverService } from './services/current-resolver.service';
import { UrlInterpolator } from './services/url-interpolator';
import { BINDER_FACTORIES } from './services/meta-binder-factory';

import { LinkBinderFactory } from './services/link-binder-factory';
import { ActionBinderFactory } from './services/action-binder-factory';
import { PropertyBinderFactory } from './services/property-binder-factory';
import { ActionExecutor } from './services/action-executor';

@NgModule({
  imports: [],
  declarations: [CoreComponent],
  providers: [
    ComponentInstantiationInterceptor,
    ResourcePathNormalizer,
    MetaBindersProvider,
    CurrentResolverService,
    UrlInterpolator,
    ActionExecutor,
    { provide: BINDER_FACTORIES, useClass: LinkBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertyBinderFactory, multi: true }
  ],
  exports: [CoreComponent]
})
export class CoreModule {
  constructor(interceptor: ComponentInstantiationInterceptor) { }
}
