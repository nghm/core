import { Injectable, Injector } from '@angular/core';

import { EntitiesBoundMetadata } from '../../decorators';
import { EntitiesBinder } from './entities-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { CssQueryFactory } from '../css-query.factory';
import { MetaBinder } from './meta-binders-provider';
import { ResolverService } from '../current-resolver';

@Injectable()
export class EntitiesBinderFactory implements MetaBinderFactory {
  constructor(private queryFactory: CssQueryFactory, private injector: Injector) { }

  canMake(meta: any): boolean {
    return meta instanceof EntitiesBoundMetadata;
  }

  make(meta: EntitiesBoundMetadata, metaBinder: MetaBinder): EntitiesBinder {
    return new EntitiesBinder(meta, metaBinder, this.queryFactory, this.injector.get(ResolverService));
  }
}
