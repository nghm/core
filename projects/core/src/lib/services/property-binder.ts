import { PropertyBoundMetadata } from '../decorators';
import { Binder } from './binder';

export class PropertyBinder implements Binder {
  constructor(
    private meta: PropertyBoundMetadata
  ) { }

  bind(target, source): void {
    const { propertyName } = this.meta;
    const { properties: { [propertyName]: sourceProperty } } = source;
    Object.defineProperty(target, propertyName, {
      get: () => sourceProperty
    });
  }
}
