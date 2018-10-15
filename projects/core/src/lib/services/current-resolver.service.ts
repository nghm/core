import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/platform-browser';

import { ResourcePathNormalizer } from './resource-path-normalizer';
import { MetaBinder } from './meta-binders-provider';

@Injectable()
export class ResolverService {
  private location: Location;

  constructor(private http: HttpClient,
              private metaBinder: MetaBinder,
              private resourcePathNormalizer: ResourcePathNormalizer,
              @Inject(DOCUMENT) { location }: Document) {
    this.location = location;
  }

  resolve(target: any, resource = this.location.pathname + this.location.search): void {
    const normalizedResource = this.resourcePathNormalizer.normalize(resource);

    this.http
      .get(normalizedResource)
      .subscribe(source => {
        this.metaBinder.bind(target, source);
      });
  }
}
