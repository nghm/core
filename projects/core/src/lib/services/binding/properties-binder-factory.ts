import { Injectable } from '@angular/core';

import { PropertiesBoundMetadata } from '../../decorators/properties.bound-metadata';
import { PropertiesBinder } from './properties-binder';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class PropertiesBinderFactory implements MetaBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof PropertiesBoundMetadata;
  }

  make(meta: PropertiesBoundMetadata): PropertiesBinder {
    return new PropertiesBinder(meta);
  }
}
