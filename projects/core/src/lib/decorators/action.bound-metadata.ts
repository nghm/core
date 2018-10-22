import { FieldBoundMetadata } from './meta';
export class ActionBoundMetadata implements FieldBoundMetadata {
  constructor(public actionName: string, public bindingName: string) { }
}