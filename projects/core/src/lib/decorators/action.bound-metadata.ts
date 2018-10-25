import { FieldBoundMetadata } from './meta';

/**
 * The action metadata
 */
export class ActionBoundMetadata implements FieldBoundMetadata {
  /**
   * Creates an instance of ActionBoundMetadata.
   * @param actionName The action name
   * @param bindingName The property to be bound to
   */
  constructor(public actionName: string, public bindingName: string) { }
}
