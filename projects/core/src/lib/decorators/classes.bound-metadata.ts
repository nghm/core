import { FieldBoundMetadata } from './meta';

export class ClassesBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}
