import { PropertyBoundMetadata } from '../decorators';
import { PropertyBinder } from './property-binder';
import { MetaBinderFactory } from './meta-binder-factory';

export class PropertyBinderFactory implements MetaBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof PropertyBoundMetadata;
  }

  make(meta: PropertyBoundMetadata): PropertyBinder {
    return new PropertyBinder(meta);
  }
}
