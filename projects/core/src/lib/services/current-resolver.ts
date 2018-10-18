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

  resolve(target: any, resource = this.location.pathname + this.location.search): void {
    const resourceUrl = target.__RESOURCE__URI__ || this.resourcePathNormalizer.normalize(resource);

    this.http
      .get(resourceUrl)
      .subscribe(source => {
        target.__RESOURCE__URI__ = resourceUrl;

        this.metaBinder.bind(target, source);
      });
  }
}
