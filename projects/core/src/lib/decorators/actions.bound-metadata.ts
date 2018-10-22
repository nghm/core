import { FieldBoundMetadata } from './meta';
export class ActionsBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}