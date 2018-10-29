import { EntityBoundMetadata } from '../entity/entity.bound-metadata';
import { Binder } from '../binder';
import { MetaBinder } from '../meta-binders-provider';
import { CssQueryFactory } from '../../services/css-query.factory';
import { ResolverService } from '../../services/current-resolver';

export class EntitiesBinder implements Binder {
  constructor(
    private meta: EntityBoundMetadata,
    private metaBinder: MetaBinder,
    private queryFactory: CssQueryFactory,
    private resolver: ResolverService
  ) { }

  bind(target, source): void {
    const { queryString, type, bindingName } = this.meta;

    const query = this.queryFactory.make(queryString);
    const matches = query(source);

    const entities = new Array<typeof type>();

    if (matches && matches.length > 0) {

      for (const match of matches) {
        const instance = new type();

        if (match.href) {
          this.resolver.resolve(instance, match.href);
        } else {
          this.metaBinder.bind(instance, match);
        }

        entities.push(instance);
      }
    }

    target[bindingName] = entities;
  }
}
