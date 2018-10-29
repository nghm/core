import { Type } from '@angular/core';
import { FieldBoundMetadata } from '../meta';

export class RootEntityBoundMetadata implements FieldBoundMetadata {
  constructor(public type: Type<any>, public bindingName: string) { }
}
