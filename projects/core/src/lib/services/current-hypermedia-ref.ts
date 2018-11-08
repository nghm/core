import { Observable } from 'rxjs';

import { ResolverService } from './current-resolver';
import { HypermediaRef } from './hypermedia-ref';

export class CurrentHypermediaRef extends HypermediaRef {
  constructor(targets$: Observable<any[]>, resolver: ResolverService) {
    super(undefined, undefined, resolver);

    targets$.subscribe(targets => {
      this.targets = targets;
      this.fetch();
    });
  }
}
