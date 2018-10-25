import { Injectable } from '@angular/core';

import { PropertyBoundMetadata } from '../../binding/property/property.bound-metadata';
import { PropertyBinder } from './property-binder';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class PropertyBinderFactory implements MetaBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof PropertyBoundMetadata;
  }

  make(meta: PropertyBoundMetadata): PropertyBinder {
    return new PropertyBinder(meta);
  }
}
