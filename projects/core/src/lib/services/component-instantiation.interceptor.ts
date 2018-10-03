import { Injectable } from '@angular/core';
import { Router, ChildrenOutletContexts, PRIMARY_OUTLET, Scroll } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResolverService } from './current-resolver.service';

@Injectable({ providedIn: 'root' })
export class ComponentInstantiationInterceptor {
  private componentInstantiation: Observable<any>;

  constructor({ events }: Router, outlets: ChildrenOutletContexts, currentResolver: ResolverService) {
    this.componentInstantiation = events.pipe(
      filter<Scroll>(event => event instanceof Scroll),
      map(_ => outlets.getContext(PRIMARY_OUTLET).outlet.component)
    );

    this.componentInstantiation.subscribe(component => {
      currentResolver.resolve(component);
    });
  }
}
