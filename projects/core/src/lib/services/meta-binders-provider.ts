import { Injectable, Inject } from '@angular/core';

import { getSourceMetadata } from '../decorators';
import { Binder } from './binder';
import { BINDER_FACTORIES, MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class MetaBinder {
  constructor(@Inject(BINDER_FACTORIES) private metaBinderFactories: Array<MetaBinderFactory>) { }

  private getBinders(container: any): Array<Binder> {
    const metadata = getSourceMetadata(container);

    return metadata.reduce((factories, meta) => {
      const currentMetaFactories = this.metaBinderFactories
        .filter(metaBinderFactory => metaBinderFactory.canMake(meta))
        .map(metaBinderFactory => metaBinderFactory.make(meta, this));

      if (currentMetaFactories) {
        factories.push(...currentMetaFactories);
      }

      return factories;
    }, []);
  }

  bind(target: any, source: Object): void {
    const binders = this.getBinders(target);

    if (binders.length === 0) {
      return;
    }

    binders.forEach(binder => binder.bind(target, source));

    if ('hmAfterBinding' in target && target.hmAfterBinding instanceof Function) {
      target.hmAfterBinding();
    }
  }
}
