import { ResolverService } from './current-resolver';
import { ComponentInstantiationInterceptor } from './component-instantiation-interceptor';
import { Observable } from 'rxjs';

export function currentHypermediaRef(interceptor: ComponentInstantiationInterceptor, resolver: ResolverService) {
  return new CurrentHypermediaRef(interceptor.currentPage, resolver);
}

export class HypermediaRef {
  constructor(
    protected target: any,
    protected href: string,

    private resolver: ResolverService
  ) {}

  fetch(): void {
    if (this.href) {
      this.resolver.resolve(this.target, this.href);
    } else {
      this.resolver.resolvePath(this.target, location.pathname + location.search);
    }
  }
}

export class CurrentHypermediaRef extends HypermediaRef {
  constructor(
    currentPage: Observable<any>,
    resolver: ResolverService
  ) {
    super(undefined, undefined, resolver);

    currentPage.subscribe(current => {
      this.target = current;

      this.fetch();
    });
  }
}
