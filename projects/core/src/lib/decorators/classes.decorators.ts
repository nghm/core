import { setMetadataEntry } from './meta';
import { ClassesBoundMetadata } from './classes.bound-metadata';
export function Classes(): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new ClassesBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
