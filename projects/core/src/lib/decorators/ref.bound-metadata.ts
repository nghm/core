import { FieldBoundMetadata } from './meta';

export class RefBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}
