import { Component } from '@angular/core';
import { Entity, HypermediaRef, ActionListener } from '@nghm/core';
import { animations } from './home-page.animations';
import { Book } from './book.model';
import { BookCounts } from '../../models/book-counts.model';
import { AuthorCounts } from '../../models/author-counts.model';
import { Author } from '../../models/author.model';
import { Feedback } from '../../models/feedback.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations
})
export class HomePageComponent {
  @Entity('.analytic.book-counts', BookCounts)
  bookCounts: BookCounts;

  @Entity('.analytic.author-counts', AuthorCounts)
  authorCounts: AuthorCounts;

  @Entity('.analytic.author-counts > .best-selling-author', Author)
  bestSellingAuthor: Author;

  @Entity('.feedback', Feedback)
  feedback: Feedback;

  constructor(private hypermediaRef: HypermediaRef) { }

  @ActionListener('*', 'success')
  refresh({ parent }): void {
    if (parent instanceof Book) {
      parent.ref.fetch();
    } else {
      this.hypermediaRef.fetch();
    }
  }

  @ActionListener('*', 'error')
  error({ error }): void {
    console.log(error);
  }
}
