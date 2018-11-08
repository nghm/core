import { Injectable } from '@angular/core';
import { Router, ChildrenOutletContexts, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComponentInstantiationInterceptor {
  public currentPage: Observable<any[]>;
  private container: any;

  constructor({ events }: Router, outlets: ChildrenOutletContexts) {
    this.currentPage = events.pipe(
      filter<NavigationEnd>(event => event instanceof NavigationEnd),
      map(_ => {
        const context = outlets.getContext(PRIMARY_OUTLET);

        if (!this.container) {
          return [context.outlet.component];
        }

        return [this.container, context.outlet.component];
      })
    );
  }

  registerContainer(component: any): any {
    this.container = component;
  }
}
