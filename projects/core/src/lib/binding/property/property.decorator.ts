import { setMetadataEntry } from '../meta';
import { PropertyBoundMetadata } from './property.bound-metadata';
export function Property(propertyName?: string): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new PropertyBoundMetadata(propertyName || bindingName, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
