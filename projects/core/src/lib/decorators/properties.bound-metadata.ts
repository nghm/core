import { FieldBoundMetadata } from './meta';

export class PropertiesBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}
