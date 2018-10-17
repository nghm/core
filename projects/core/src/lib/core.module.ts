import { NgModule } from '@angular/core';

import { ComponentInstantiationInterceptor } from './services/component-instantiation.interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { MetaBinder } from './services/binding/meta-binders-provider';
import { ResolverService } from './services/current-resolver.service';
import { UrlInterpolator } from './services/url-interpolator';
import { BINDER_FACTORIES } from './services/binding/meta-binder-factory';

import { LinkBinderFactory } from './services/binding/link-binder-factory';
import { ActionBinderFactory } from './services/binding/action-binder-factory';
import { PropertyBinderFactory } from './services/binding/property-binder-factory';
import { ActionExecutor } from './services/action-executor';
import { ActionListenerFactory } from './services/binding/action-listener-factory';
import { LifetimeEvents } from './services/lifetime-events';
import { HypermediaRef } from './services/hypermedia-ref';
import { EntityBinderFactory } from './services/binding/entity-binder-factory';
import { CssQueryFactory } from './services/css-query-factory';
import { EntitiesBinderFactory } from './services/binding/entities-binder-factory';
import { UrlScopeTrimmer } from './services/url-scope-trimmer';
import { RootEntityBinderFactory } from './services/binding/root-entity-binder-factory';
import { PropertiesBinderFactory } from './services/binding/properties-binder-factory';
import { LinksBinderFactory } from './services/binding/links-binder-factory';
import { ActionsBinderFactory } from './services/binding/actions-binder-factory';
import { ClassesBinderFactory } from './services/binding/classes-binder-factory';

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
    { provide: BINDER_FACTORIES, useClass: LinksBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionsBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertyBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertiesBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ClassesBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionListenerFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntityBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: RootEntityBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntitiesBinderFactory, multi: true }
  ],
  exports: []
})
export class CoreModule {
  constructor(interceptor: ComponentInstantiationInterceptor) { }
}
