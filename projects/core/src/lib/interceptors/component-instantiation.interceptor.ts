import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComponentInstantiationInterceptor {
  private componentInstantiation: Observable<{ component: any }>;

  constructor(router: Router) {
    this.componentInstantiation = router.events.pipe(
      filter<ActivationEnd>(event => event instanceof ActivationEnd),
      map(({ snapshot }) => snapshot)
    );

    this.componentInstantiation.subscribe((snapshot) => console.log(snapshot));
  }
}
