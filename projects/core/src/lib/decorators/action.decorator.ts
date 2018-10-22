import { setMetadataEntry } from './meta';
import { ActionBoundMetadata } from './action.bound-metadata';

export function Action<T>(actionName?: string): PropertyDecorator {
  return function (target: T, bindingName: string) {
    const metadata = new ActionBoundMetadata(actionName || bindingName, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
