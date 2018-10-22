import { setMetadataEntry } from './meta';
import { ActionListenerBoundMetadata } from './action-listener.bound-metadata';
export function ActionListener(actionName: string, ...events: Array<string>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new ActionListenerBoundMetadata(actionName || bindingName, events, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
