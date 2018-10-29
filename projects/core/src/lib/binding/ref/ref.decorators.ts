import { setMetadataEntry } from '../meta';
import { RefBoundMetadata } from './ref.bound-metadata';
export function Ref(): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new RefBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
