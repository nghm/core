import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/platform-browser';

import { ResourcePathNormalizer } from './resource-path-normalizer';
import { MetaBinder } from './binding/meta-binders-provider';

@Injectable()
export class ResolverService {
  private location: Location;

  constructor(
    private http: HttpClient,
    private metaBinder: MetaBinder,
    private resourcePathNormalizer: ResourcePathNormalizer) {
    this.location = location;
  }

  resolvePath(target: any, path: string) {
    const uri = this.resourcePathNormalizer.normalize(path);

    return this.resolve(target, uri);
  }

  resolve(target: any, resourceUrl: string): void {
    if (target.hmBeforeResolve && target.hmBeforeResolve instanceof Function) {
      target.hmBeforeResolve();
    }

    this.http
      .get(resourceUrl)
      .subscribe(source => {
        source['href'] = resourceUrl;

        this.metaBinder.bind(target, source);

        if (target.hmAfterResolve && target.hmAfterResolve instanceof Function) {
          target.hmAfterResolve();
        }
      });
  }
}
