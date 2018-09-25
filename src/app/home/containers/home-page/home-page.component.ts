import { Component } from '@angular/core';
import { Property, Link, LinkFunction, Action, ActionFunction } from '@nghm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Property() title: string;
  @Property() description: string;

  @Link() aboutUs: string;
  @Link() next: string;
  @Link({ params: true }) page: LinkFunction<{ no: number }>;

  @Action() updateTitle: ActionFunction<{ title: string }>;
  @Action() clearDescription: ActionFunction;

  constructor() {
    this.updateTitle();

    this.clearDescription();
  }

  // @Entity(Foo) mainFoo: Contact;
  // @Entities(Foo) foos: Array<Contact>;
  // @Entity(Foo, { deep: true}) deepEntity: Foo;
  // @Entity([Foo, Bar]) polymorphicEntity: Foo | Bar;
  // @Entities([Foo, Bar]) polymorphicEntities: Array<Foo | Bar>;

  // @Action() clearDescription?(): void;
  // @Action() updateTitle?(params: { title: string }): void;

  // @Link('dashboard') dashboard?();
  // @Link('next') next?();
  // @Link('page') page?(params: { no: number });
}
