import { Property, Link } from '@nghm/core';

export class AuthorCounts {
  @Property() newAuthors: number;
  @Property() totalAuthors: number;
}
