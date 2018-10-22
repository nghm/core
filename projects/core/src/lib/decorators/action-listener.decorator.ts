import { setMetadataEntry } from './meta';
import { ActionListenerBoundMetadata } from './action-listener.bound-metadata';
import { ActionEventType } from './action-event.type';

/**
 * Binds a action event to a action listener and supplies configuration metadata.
 * Nghm invokes the supplied handler method when a action event triggers and
 * passes a event object.
 *
 * @usageNotes
 *
 * The following example declares a page
 * that attaches a all success listener to a clear action that logs success cases.
 *
 * ```
 * class HomePage {
 *   @Action() clear;
 *
 *   @ActionListener('*', 'success')
 *   onSuccess({ action }) {
 *     console.log('action-success', action.name, event);
 *  }
 * }
 *
 * ```
 *
 * @Annotation
 *
 * @param {string | '*'} actionName The action to listen. The '*' option can be used to listen to all actions
 * @param {...Array<ActionEventType>} events A list of events to listen
 */
export function ActionListener(actionName: string | '*', ...events: Array<ActionEventType>): PropertyDecorator {
  return function <T>(target: T, bindingName: string) {
    const metadata = new ActionListenerBoundMetadata(actionName || bindingName, events, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
