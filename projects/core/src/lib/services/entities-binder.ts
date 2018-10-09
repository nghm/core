import { EntityBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { MetaBinder } from './meta-binders-provider';
import { CssQueryFactory } from './css-query-factory';

export class EntitiesBinder implements Binder {
  constructor(
    private meta: EntityBoundMetadata,
    private metaBinder: MetaBinder,
    private queryFactory: CssQueryFactory
  ) { }

  bind(target, source): void {
    const { queryString, type, bindingName } = this.meta;

    const query = this.queryFactory.make(queryString);
    const matches = query(source);

    const entities = new Array<typeof type>();

    if (matches && matches.length > 0) {

      for (const match of matches) {
        const instance = new type();

        this.metaBinder.bind(instance, match);
        entities.push(instance);
      }
    }

    Object.defineProperty(target, bindingName, {
      get: () => entities
    });
  }
}
