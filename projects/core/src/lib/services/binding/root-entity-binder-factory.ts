import { Injectable, Inject } from '@angular/core';

import { RootEntityBoundMetadata } from '../../decorators/root-entity.bound-metadata';
import { RootEntityBinder } from './root-entity-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { MetaBinder } from './meta-binders-provider';

@Injectable()
export class RootEntityBinderFactory implements MetaBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof RootEntityBoundMetadata;
  }

  make(meta: RootEntityBoundMetadata, metaBinder: MetaBinder): RootEntityBinder {
    return new RootEntityBinder(meta, metaBinder);
  }
}
