import { setMetadataEntry } from '../meta';
import { PropertiesBoundMetadata } from './properties.bound-metadata';
export function Properties(): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new PropertiesBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
