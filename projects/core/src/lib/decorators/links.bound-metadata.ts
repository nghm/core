import { FieldBoundMetadata } from './meta';

export class LinksBoundMetadata implements FieldBoundMetadata {
  constructor(public nameFactory: (link: {
    href: string;
    rel: Array<string>;
  }) => string, public linkQueries: Array<Array<string>>, public bindingName: string) { }
}
