import { FieldBoundMetadata } from '../meta';

/**
 * Action bound metadata
 */
export class ActionsBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}
