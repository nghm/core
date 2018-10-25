import { FieldBoundMetadata } from '../meta';

export class LinkBoundMetadata implements FieldBoundMetadata {
  constructor(public linkQueries: Array<Array<string>>, public bindingName: string) { }
}
