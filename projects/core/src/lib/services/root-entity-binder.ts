import { RootEntityBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { MetaBinder } from './meta-binders-provider';

export class RootEntityBinder implements Binder {
  constructor(
    private meta: RootEntityBoundMetadata,
    private metaBinder: MetaBinder
  ) { }

  bind(target, source): void {
    const { type, bindingName } = this.meta;

    if (source) {
      const instance = new type();

      this.metaBinder.bind(instance, source);

      Object.defineProperty(target, bindingName, {
        get: () => instance
      });
    }
  }
}
