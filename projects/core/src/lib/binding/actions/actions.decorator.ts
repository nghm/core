import { setMetadataEntry } from '../meta';
import { ActionsBoundMetadata } from './actions.bound-metadata';

export function Actions<T>(): PropertyDecorator {
  return function (target: T, bindingName: string) {
    const metadata = new ActionsBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
