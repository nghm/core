import { EntityBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { MetaBinder } from './meta-binders-provider';
import { CssQueryFactory } from './css-query-factory';

export class EntityBinder implements Binder {
  constructor(
    private meta: EntityBoundMetadata,
    private metaBinder: MetaBinder,
    private queryFactory: CssQueryFactory
  ) { }

  bind(target, source): void {
    const { queryString, type, bindingName } = this.meta;

    const query = this.queryFactory.make(queryString);
    const matches = query(source);

    if (matches && matches.length > 0) {
      const firstSource = matches[0];
      const instance = new type();

      this.metaBinder.bind(instance, firstSource);

      Object.defineProperty(target, bindingName, {
        get: () => instance
      });
    }
  }
}
