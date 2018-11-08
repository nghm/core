import { Property, Link } from '@nghm/core';

export class BookCounts {
  @Property() newBooks: number;
  @Property() rentedBooks: number;
  @Property() totalBooks: number;

  @Link() books;
}
