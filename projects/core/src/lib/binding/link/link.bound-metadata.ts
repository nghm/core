import { FieldBoundMetadata } from '../meta';

export class LinkBoundMetadata implements FieldBoundMetadata {
  public name: string;

  constructor(nameOrQuery: string | Array<string>, public linkQueries: Array<Array<string>> = [], public bindingName: string) {
    if (nameOrQuery instanceof Array) {
      this.linkQueries.push(nameOrQuery);
    } else {
      this.name = nameOrQuery;
    }
  }
}
