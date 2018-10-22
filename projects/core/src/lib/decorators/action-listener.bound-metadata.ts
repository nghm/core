import { FieldBoundMetadata } from './meta';

/**
 * The action listener metadata
 * @private
 *
 * @class ActionListenerBoundMetadata
 * @implements {FieldBoundMetadata}
 *
 */
export class ActionListenerBoundMetadata implements FieldBoundMetadata {
  /**
   * Creates an instance of ActionListenerBoundMetadata.
   * @param {string} actionName The action to listen. The '*' option can be used to listen to all actions
   * @param {Array<string>} events A list of events to listen
   * @param {string} bindingName The property to be bound to
   * @memberof ActionListenerBoundMetadata
   */
  constructor(
    public actionName: string | '*',
    public events: Array<string>,
    public bindingName: string
  ) { }
}
