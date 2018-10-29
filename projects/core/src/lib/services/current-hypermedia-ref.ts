import { Observable } from 'rxjs';

import { ResolverService } from './current-resolver';
import { HypermediaRef } from './hypermedia-ref';

export class CurrentHypermediaRef extends HypermediaRef {
  constructor(currentPage: Observable<any>, resolver: ResolverService) {
    super(undefined, undefined, resolver);
    currentPage.subscribe(current => {
      this.target = current;
      this.fetch();
    });
  }
}
