import { FieldBoundMetadata } from '../meta';

export class LinksBoundMetadata implements FieldBoundMetadata {
  constructor(public linkQueries: Array<Array<string>>, public bindingName: string) { }
}
