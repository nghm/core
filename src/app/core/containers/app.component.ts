import { Component } from '@angular/core';
import { Entity } from '@nghm/core';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppRootComponent {
  @Entity('.menu', Menu) menu: Menu;

  opened = false;

  closeSidenav(): void {
    this.opened = false;
  }

  openSidenav(): void {
    this.opened = true;
  }

  linkTracker(_, link) {
    return link.name;
  }
}
