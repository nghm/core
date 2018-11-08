import { setMetadataEntry } from '../meta';
import { LinkBoundMetadata } from './link.bound-metadata';

export function Link(nameOrQuery: string | Array<string> = [], ...alternativeQueries: Array<Array<string>>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new LinkBoundMetadata(
      nameOrQuery,
      alternativeQueries.length !== 0 && alternativeQueries || [[bindingName]],
      bindingName
    );

    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
