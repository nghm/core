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
    private resourcePathNormalizer: ResourcePathNormalizer,
    @Inject(DOCUMENT) { location }: Document) {
    this.location = location;
  }

  resolveSelf(target: any) {
    const { resourceUrl, at } = target.$$resource;

    return this.resolve(target, resourceUrl);
  }

  resolvePath(target: any, path = this.location.pathname + this.location.search) {
    const uri = this.resourcePathNormalizer.normalize(path);

    return this.resolve(target, uri);
  }

  resolve(target: any, resourceUrl: string): void {
    this.http
      .get(resourceUrl)
      .subscribe(source => {
        target.$$resource = { resourceUrl, at: Date.now() };

        this.metaBinder.bind(target, source);
      });
  }

  isPath(path: string) {
    path.startsWith('/');
  }
}
