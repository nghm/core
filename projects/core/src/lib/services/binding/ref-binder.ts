import { RefBoundMetadata } from '../../binding/ref/ref.bound-metadata';
import { Binder } from './binder';
import { HypermediaRef } from '../hypermedia-ref';
import { ResolverService } from '../current-resolver';

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
