import { PropertiesBoundMetadata } from '../../decorators';
import { Binder } from './binder';

export class PropertiesBinder implements Binder {
  constructor(
    private meta: PropertiesBoundMetadata
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const { properties } = source;

    Object.defineProperty(target, bindingName, {
      get: () => properties
    });
  }
}
