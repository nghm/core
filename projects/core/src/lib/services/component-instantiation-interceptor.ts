import { Injectable } from '@angular/core';
import { Router, ChildrenOutletContexts, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComponentInstantiationInterceptor {
  public currentPage: Observable<any>;

  constructor({ events }: Router, outlets: ChildrenOutletContexts) {
    this.currentPage = events.pipe(
      filter<NavigationEnd>(event => event instanceof NavigationEnd),
      map(_ => outlets.getContext(PRIMARY_OUTLET).outlet.component)
    );
  }
}
