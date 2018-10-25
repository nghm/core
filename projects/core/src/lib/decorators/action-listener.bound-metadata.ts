import { FieldBoundMetadata } from './meta';

/**
 * The action listener metadata
 */
export class ActionListenerBoundMetadata implements FieldBoundMetadata {
  /**
   * Creates an instance of ActionListenerBoundMetadata.
   * @param actionName The action to listen. The '*' option can be used to listen to all actions
   * @param events A list of events to listen
   * @param bindingName The property to be bound to
   */
  constructor(
    public actionName: string | '*',
    public events: Array<string>,
    public bindingName: string
  ) { }
}
