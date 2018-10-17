import { Injectable } from '@angular/core';
import { ResolverService } from './current-resolver';
import { ComponentInstantiationInterceptor } from './component-instantiation-interceptor';

@Injectable()
export class HypermediaRef {
  constructor(private interceptor: ComponentInstantiationInterceptor, private resolver: ResolverService) {}

  fetch(): void {
    const target = this.interceptor.currentPage;

    this.resolver.resolve(target);
  }
}
