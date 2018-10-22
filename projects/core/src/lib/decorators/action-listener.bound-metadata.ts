import { FieldBoundMetadata } from './meta';
export class ActionListenerBoundMetadata implements FieldBoundMetadata {
  constructor(public actionName: string, public events: Array<string>, public bindingName: string) { }
}