import { Injectable, Inject } from '@angular/core';

import { getSourceMetadata } from '../decorators';
import { Binder } from './binder';
import { BINDER_FACTORIES, MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class MetaBindersProvider {
  constructor(@Inject(BINDER_FACTORIES) private metaBinderFactories: Array<MetaBinderFactory>) { }

  getBinders(container: any): Array<Binder> {
    const metadata = getSourceMetadata(container);

    return metadata.reduce((factories, meta) => {
      const currentMetaFactories = this.metaBinderFactories
        .filter(metaBinderFactory => metaBinderFactory.canMake(meta))
        .map(metaBinderFactory => metaBinderFactory.make(meta));

      if (currentMetaFactories) {
        factories.push(...currentMetaFactories);
      }

      return factories;
    }, []);
  }
}
