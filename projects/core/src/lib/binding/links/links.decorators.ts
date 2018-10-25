import { setMetadataEntry } from '../meta';
import { LinksBoundMetadata } from './links.bound-metadata';
export function Links(nameFactory: (link: {
  href: string;
  rel: string[];
}) => string, ...linkQueries: Array<Array<string>>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new LinksBoundMetadata(nameFactory, linkQueries, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
