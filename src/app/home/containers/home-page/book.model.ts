import { Property, Link, Action } from '@nghm/core';

export class Book {
  @Property() title: string;
  @Property() description: string;
  @Link() self: string;
  @Action() update;

  loading = true;

  hmAfterBinding() {
    this.loading = false;
  }
}
