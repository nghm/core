import { Component, HostListener } from '@angular/core';
import { Property, Link, LinkFunction, Action, ActionFunction, Entity,
  ParameterizedActionFunction, ActionListener, HypermediaRef, Entities } from '@nghm/core';

export class Chapter {
  @Property() title: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Property() title: string;
  @Property() description: string;

  @Entity(':root > .chapter:first-child', Chapter)
  firstChapter: Chapter;

  @Entities('.chapter', Chapter)
  middleChapters: Array<Chapter>;

  @Entity(':root > .chapter:last-child', Chapter)
  lastChapter: Chapter;

  @Link() aboutUs: LinkFunction<void>;
  @Link() next: LinkFunction<void>;
  @Link() page: LinkFunction<{ no: number }>;

  @Action() updateTitle: ParameterizedActionFunction<{ title: string }>;
  @Action() clearDescription: ActionFunction;

  constructor(private hypermediaRef: HypermediaRef) {}

  @ActionListener('*', 'success')
  refresh({ action, response: { status }}): void {
    console.log(status);

    this.hypermediaRef.fetch();
  }

  @ActionListener('*', 'error')
  error({ error: { status } }): void {
    console.log(status);
  }

  hmAfterBinding() {
    this.clearDescription();
  }
}
