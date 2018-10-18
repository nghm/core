import { Component } from '@angular/core';
import { Property, ActionListener, Links, Link, Entities, HypermediaRef } from '@nghm/core';
import { AppRootComponent } from 'src/app/core/containers/app.component';
import { animations } from './home-page.animations';
import { Book } from './book.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations
})
export class HomePageComponent {
  @Links(link => link.rel.find(rel => rel !== 'menu'), ['menu'])
  set menuLinks(links) {
    this.appRoot.setMenuLinks(links);
  }

  @Link() topRatedBook;

  @Property() title;
  @Property() description;

  @Entities('.latest-book', Book) latestBooks;

  constructor(
    private hypermediaRef: HypermediaRef,
    private appRoot: AppRootComponent) {

  }

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
