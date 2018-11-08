import { setMetadataEntry } from '../meta';
import { LinksBoundMetadata } from './links.bound-metadata';
export function Links(...linkQueries: Array<Array<string>>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new LinksBoundMetadata(linkQueries, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
