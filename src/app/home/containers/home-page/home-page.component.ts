import { Component } from '@angular/core';
import { Property, Link, LinkFunction, Action, ActionFunction, ParameterizedActionFunction } from '@nghm/core';

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
  @Link() page: LinkFunction<{ no: number }>;

  @Action() updateTitle: ParameterizedActionFunction<{ title: string }>;
  @Action() clearDescription: ActionFunction;

  hmAfterBinding() {
    this.clearDescription();
  }
}
