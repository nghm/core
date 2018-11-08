import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResourcePathNormalizer } from './resource-path-normalizer';
import { MetaBinder } from '../binding/meta-binders-provider';
import { Binder } from '../binding/binder';

@Injectable()
export class ResolverService {
  private location: Location;

  constructor(
    private http: HttpClient,
    private metaBinder: MetaBinder,
    private resourcePathNormalizer: ResourcePathNormalizer) {
    this.location = location;
  }

  resolvePath(targets: any[], path: string) {
    const uri = this.resourcePathNormalizer.normalize(path);

    return this.resolve(targets, uri);
  }

  resolve(targets: any[], resourceUrl: string): void {
    targets.forEach(target => {
      if (target.hmBeforeResolve && target.hmBeforeResolve instanceof Function) {
        target.hmBeforeResolve();
      }
    });

    this.http
      .get(resourceUrl)
      .subscribe(source => {
        source['href'] = resourceUrl;

        targets.forEach(target => {
          this.metaBinder.bind(target, source);

          if (target.hmAfterResolve && target.hmAfterResolve instanceof Function) {
            target.hmAfterResolve();
          }
        });
      });
  }
}
