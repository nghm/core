import { Component } from '@angular/core';
import { Property, Link, LinkFunction, Action, ActionFunction,
  ParameterizedActionFunction, ActionListener, HypermediaRef } from '@nghm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Property() title: string;
  @Property() description: string;

  @Property('title') firstChapterTitle: string;

  @Link() aboutUs: string;
  @Link() next: string;
  @Link() page: LinkFunction<{ no: number }>;

  @Action() updateTitle: ParameterizedActionFunction<{ title: string }>;
  @Action() clearDescription: ActionFunction;

  constructor(private hypermediaRef: HypermediaRef) {}

  @ActionListener('updateTitle:success')
  @ActionListener('clearDescription:success')
  refresh(): void {
    this.hypermediaRef.fetch();
  }

  hmAfterBinding() {
    this.clearDescription();
  }
}
