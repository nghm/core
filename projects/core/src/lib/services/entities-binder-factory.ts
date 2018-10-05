import { Injectable } from '@angular/core';

import { EntitiesBoundMetadata } from '../decorators';
import { EntitiesBinder } from './entities-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { CssQueryFactory } from './css-query-factory';
import { MetaBinder } from './meta-binders-provider';

@Injectable()
export class EntitiesBinderFactory implements MetaBinderFactory {
  constructor(private queryFactory: CssQueryFactory) { }

  canMake(meta: any): boolean {
    return meta instanceof EntitiesBoundMetadata;
  }

  make(meta: EntitiesBoundMetadata, metaBinder: MetaBinder): EntitiesBinder {
    return new EntitiesBinder(meta, metaBinder, this.queryFactory);
  }
}
