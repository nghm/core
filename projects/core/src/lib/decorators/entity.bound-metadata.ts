import { Type } from '@angular/core';
import { FieldBoundMetadata } from './meta';
export class EntityBoundMetadata implements FieldBoundMetadata {
  constructor(public queryString: string, public type: Type<any>, public bindingName: string) { }
}