import { NgModule } from '@angular/core';

import { ComponentInstantiationInterceptor } from './services/component-instantiation.interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { MetaBinder } from './services/meta-binders-provider';
import { ResolverService } from './services/current-resolver.service';
import { UrlInterpolator } from './services/url-interpolator';
import { BINDER_FACTORIES } from './services/meta-binder-factory';

import { LinkBinderFactory } from './services/link-binder-factory';
import { ActionBinderFactory } from './services/action-binder-factory';
import { PropertyBinderFactory } from './services/property-binder-factory';
import { ActionExecutor } from './services/action-executor';
import { ActionListenerFactory } from './services/action-listener-factory';
import { LifetimeEvents } from './services/lifetime-events';
import { HypermediaRef } from './services/hypermedia-ref';
import { EntityBinderFactory } from './services/entity-binder-factory';
import { CssQueryFactory } from './services/css-query-factory';
import { EntitiesBinderFactory } from './services/entities-binder-factory';
import { UrlScopeTrimmer } from './services/url-scope-trimmer';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ComponentInstantiationInterceptor,
    ResourcePathNormalizer,
    MetaBinder,
    ResolverService,
    UrlInterpolator,
    ActionExecutor,
    LifetimeEvents,
    HypermediaRef,
    CssQueryFactory,
    UrlScopeTrimmer,
    { provide: BINDER_FACTORIES, useClass: LinkBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertyBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionListenerFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntityBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntitiesBinderFactory, multi: true }
  ],
  exports: []
})
export class CoreModule {
  constructor(interceptor: ComponentInstantiationInterceptor) { }
}
