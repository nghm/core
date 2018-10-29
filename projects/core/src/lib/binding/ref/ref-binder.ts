import { RefBoundMetadata } from './ref.bound-metadata';
import { Binder } from '../binder';
import { HypermediaRef } from '../../services/hypermedia-ref';
import { ResolverService } from '../../services/current-resolver';

export class RefBinder implements Binder {
  constructor(
    private meta: RefBoundMetadata,
    private resolver: ResolverService
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const hypermediaRef = new HypermediaRef(target, source.href, this.resolver);

    target[bindingName] = hypermediaRef;
  }
}
