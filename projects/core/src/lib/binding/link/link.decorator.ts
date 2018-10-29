import { setMetadataEntry } from '../meta';
import { LinkBoundMetadata } from './link.bound-metadata';
export function Link(...linkQueries: Array<Array<string>>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new LinkBoundMetadata(linkQueries.length !== 0 && linkQueries || [[bindingName]], bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
