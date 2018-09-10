import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ComponentInstantiationInterceptor } from './interceptors/component-instantiation.interceptor';

@NgModule({
  imports: [],
  declarations: [CoreComponent],
  providers: [ComponentInstantiationInterceptor],
  exports: [CoreComponent]
})
export class CoreModule { }
