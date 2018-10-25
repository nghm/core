import { setMetadataEntry } from './meta';
import { ActionBoundMetadata } from './action.bound-metadata';

/**
 * Binds a action from the source to the host.
 *
 * @usageNotes
 *
 * The following example declares a page
 * that will have the clear action bound from the current source.
 *
 * The clear is later called in the hmAfterBinding hook.
 *
 * ```
 * class HomePage {
 *   @Action() clear;
 *
 *   hmAfterBinding() {
 *     clear();
 *   }
 * }
 *
 * ```
 *
 * @Annotation
 *
 * @param actionName The name of the action to bind, this defaults to the property name
 */
export function Action(actionName?: string): PropertyDecorator {
  return function (target: any, bindingName: string) {
    const metadata = new ActionBoundMetadata(actionName || bindingName, bindingName);
    setMetadataEntry(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
