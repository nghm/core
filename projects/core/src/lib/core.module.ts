import { NgModule } from '@angular/core';
import { BinderModule } from './services/binding/binding.module';

import { ComponentInstantiationInterceptor } from './services/component-instantiation-interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { MetaBinder } from './services/binding/meta-binders-provider';
import { ResolverService } from './services/current-resolver';
import { UrlInterpolator } from './services/url-interpolator';
import { UrlScopeTrimmer } from './services/url-scope-trimmer';
import { ActionExecutorService } from './services/action-executor';
import { LifetimeEvents } from './services/lifetime-events';
import { currentHypermediaRef, HypermediaRef } from './services/hypermedia-ref';
import { CssQueryFactory } from './services/css-query.factory';

@NgModule({
  imports: [BinderModule],
  declarations: [],
  providers: [
    ComponentInstantiationInterceptor,
    ResourcePathNormalizer,
    MetaBinder,
    ResolverService,
    UrlInterpolator,
    ActionExecutorService,
    LifetimeEvents,
    {
      provide: HypermediaRef,
      useFactory: currentHypermediaRef,
      deps: [ComponentInstantiationInterceptor, ResolverService]
    },
    CssQueryFactory,
    UrlScopeTrimmer
  ],
  exports: []
})
export class CoreModule {
  constructor(interceptor: ComponentInstantiationInterceptor) { }
}
