import { ResolverService } from './current-resolver';
import { ComponentInstantiationInterceptor } from './component-instantiation-interceptor';
import { Observable } from 'rxjs';

export function currentHypermediaRef(interceptor: ComponentInstantiationInterceptor, resolver: ResolverService) {
  return new CurrentHypermediaRef(interceptor.currentPage, resolver);
}

export class HypermediaRef {
  constructor(
    protected target: any,
    private resolver: ResolverService
  ) {}

  fetch(): void {
    this.resolver.resolve(this.target);
  }
}

export class CurrentHypermediaRef extends HypermediaRef {
  constructor(
    currentPage: Observable<any>,
    resolver: ResolverService
  ) {
    super(undefined, resolver);

    currentPage.subscribe(current => {
      this.target = current;

      this.fetch();
    });
  }
}
