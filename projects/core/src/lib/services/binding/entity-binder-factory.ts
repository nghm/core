import { Injectable, Inject, Injector } from '@angular/core';

import { EntityBoundMetadata } from '../../decorators';
import { EntityBinder } from './entity-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { CssQueryFactory } from '../css-query-factory';
import { MetaBinder } from './meta-binders-provider';
import { ResolverService } from '../current-resolver.service';

@Injectable()
export class EntityBinderFactory implements MetaBinderFactory {
  constructor(private queryFactory: CssQueryFactory, private injector: Injector) { }

  canMake(meta: any): boolean {
    return meta instanceof EntityBoundMetadata;
  }

  make(meta: EntityBoundMetadata, metaBinder: MetaBinder): EntityBinder {
    return new EntityBinder(meta, metaBinder, this.queryFactory, this.injector.get(ResolverService));
  }
}
