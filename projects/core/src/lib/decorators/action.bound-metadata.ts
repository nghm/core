import { FieldBoundMetadata } from './meta';

/**
 * The action metadata
 *
 * @private
 * @class ActionBoundMetadata
 * @implements {FieldBoundMetadata}
 */
export class ActionBoundMetadata implements FieldBoundMetadata {
  /**
   * Creates an instance of ActionBoundMetadata.
   * @param {string} actionName The action name
   * @param {string} bindingName The property to be bound to
   * @memberof ActionBoundMetadata
   */
  constructor(public actionName: string, public bindingName: string) { }
}
