import { FieldBoundMetadata } from './meta';

/**
 *
 * @private
 * @class ActionsBoundMetadata
 * @implements {FieldBoundMetadata}
 */
export class ActionsBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}
