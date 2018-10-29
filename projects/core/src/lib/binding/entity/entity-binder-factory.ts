import { Injectable, Injector } from '@angular/core';

import { EntityBoundMetadata } from './entity.bound-metadata';
import { EntityBinder } from './entity-binder';
import { MetaBinderFactory } from '../meta-binder-factory';
import { CssQueryFactory } from '../../services/css-query.factory';
import { MetaBinder } from '../meta-binders-provider';
import { ResolverService } from '../../services/current-resolver';

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
