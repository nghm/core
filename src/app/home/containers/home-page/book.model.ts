import { Property, Link, Action, HypermediaRef, Ref } from '@nghm/core';

export class Book {
  loading: boolean;

  @Property() title: string;
  @Property() description: string;
  @Link() self: string;
  @Action() update;
  @Ref() ref: HypermediaRef;

  hmBeforeBinding() { this.loading = true; }
  hmAfterBinding() { this.loading = false; }
}
