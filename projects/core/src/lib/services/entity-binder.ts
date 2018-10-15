import { EntityBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { MetaBinder } from './meta-binders-provider';
import { CssQueryFactory } from './css-query-factory';
import { ResolverService } from './current-resolver.service';

export class EntityBinder implements Binder {
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

    if (matches && matches.length > 0) {
      const firstSource = matches[0];
      const instance = new type();

      if (firstSource.href) {
        this.resolver.resolve(target, firstSource.href);

        return;
      }

      this.metaBinder.bind(instance, firstSource);

      target[bindingName] = instance;
    }
  }
}
