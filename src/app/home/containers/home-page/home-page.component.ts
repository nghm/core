import { Component } from '@angular/core';
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

  @Link() aboutUs: string;
  @Link() next: string;
  @Link() page: LinkFunction<{ no: number }>;

  @Action() updateTitle: ParameterizedActionFunction<{ title: string }>;
  @Action() clearDescription: ActionFunction;

  constructor(private hypermediaRef: HypermediaRef) {}

  @ActionListener('updateTitle', 'success')
  @ActionListener('clearDescription', 'success')
  refresh(): void {
    this.hypermediaRef.fetch();
  }

  hmAfterBinding() {
    this.clearDescription();
  }
}
