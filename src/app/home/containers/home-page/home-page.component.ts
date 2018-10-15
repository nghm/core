import { Component } from '@angular/core';
import { Property, ActionListener, HypermediaRef, Links, Link, Entities, Action } from '@nghm/core';
import { AppRootComponent } from 'src/app/core/containers/app.component';

export class Book {
  loading = true;

  @Property() title: string;
  @Property() description: string;

  @Link() self: string;

  @Action() update;

  hmAfterBinding() {
    this.loading = false;
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
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

  constructor(private hypermediaRef: HypermediaRef, private appRoot: AppRootComponent) {}

  @ActionListener('*', 'success')
  refresh({ response: { status }}): void {
    console.log(status);

    this.hypermediaRef.fetch();
  }

  @ActionListener('*', 'error')
  error({ error: { status } }): void {
    console.log(status);
  }

  hmAfterBinding() {
  }
}
