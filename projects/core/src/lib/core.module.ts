import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ComponentInstantiationInterceptor } from './services/component-instantiation.interceptor';
import { ResourcePathNormalizer } from './services/resource-path-normalizer';
import { ComponentBindingsAnalizer } from './services/component-bindings-analizer';
import { CurrentResolverService } from './services/current-resolver.service';

@NgModule({
  imports: [],
  declarations: [CoreComponent],
  providers: [
    ComponentInstantiationInterceptor,
    ResourcePathNormalizer,
    ComponentBindingsAnalizer,
    CurrentResolverService
  ],
  exports: [CoreComponent]
})
export class CoreModule {
  constructor(interceptor: ComponentInstantiationInterceptor) { }
}
