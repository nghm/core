import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BinderModule } from './binding/binding.module';

import { ComponentInstantiationInterceptor } from './services/component-instantiation-interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { MetaBinder } from './binding/meta-binders-provider';
import { ResolverService } from './services/current-resolver';
import { UrlInterpolator } from './services/url-interpolator';
import { UrlScopeTrimmer } from './services/url-scope-trimmer';
import { ActionExecutorService } from './services/action-executor';
import { LifetimeEvents } from './services/lifetime-events';
import { HypermediaRef } from './services/hypermedia-ref';
import { CssQueryFactory } from './services/css-query.factory';
import { currentHypermediaRef } from './services/current-hypermedia-ref.factory';
import { RouterOutletInterceptorDirective } from './directives/router-outlet-interceptor.directive';

@NgModule({
  imports: [BinderModule, RouterModule],
  declarations: [RouterOutletInterceptorDirective],
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
  exports: [RouterOutletInterceptorDirective]
})
export class CoreModule {
}
