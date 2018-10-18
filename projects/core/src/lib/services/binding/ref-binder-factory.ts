import { Injectable, Injector } from '@angular/core';

import { RefBoundMetadata } from '../../decorators';
import { RefBinder } from './ref-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { ResolverService } from '../current-resolver';

@Injectable()
export class RefBinderFactory implements MetaBinderFactory {
  constructor(private injector: Injector) { }

  canMake(meta: any): boolean {
    return meta instanceof RefBoundMetadata;
  }

  make(meta: RefBoundMetadata): RefBinder {
    return new RefBinder(meta, this.injector.get(ResolverService));
  }
}
