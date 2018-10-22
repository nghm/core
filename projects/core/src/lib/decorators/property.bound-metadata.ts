import { FieldBoundMetadata } from './meta';
export class PropertyBoundMetadata implements FieldBoundMetadata {
  constructor(public propertyName: string, public bindingName: string) { }
}