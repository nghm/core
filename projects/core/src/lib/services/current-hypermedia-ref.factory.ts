import { ComponentInstantiationInterceptor } from './component-instantiation-interceptor';
import { CurrentHypermediaRef } from './current-hypermedia-ref';
import { ResolverService } from './current-resolver';

export function currentHypermediaRef(interceptor: ComponentInstantiationInterceptor, resolver: ResolverService) {
  return new CurrentHypermediaRef(interceptor.currentPage, resolver);
}
