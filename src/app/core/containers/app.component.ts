import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppRootComponent {
  menuLinks: Array<any>;
  opened = false;

  constructor(private title: Title) { }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setMenuLinks(menuLinks: Array<any>): void {
    this.menuLinks = menuLinks;
  }

  closeSidenav(): void {
    this.opened = false;
  }

  openSidenav(): void {
    this.opened = true;
  }
}
