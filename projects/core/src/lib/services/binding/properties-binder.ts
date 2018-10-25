import { PropertiesBoundMetadata } from '../../decorators/properties.bound-metadata';
import { Binder } from './binder';

export class PropertiesBinder implements Binder {
  constructor(
    private meta: PropertiesBoundMetadata
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const { properties } = source;

    target[bindingName] = properties;
  }
}
