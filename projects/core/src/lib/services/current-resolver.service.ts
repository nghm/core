import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/platform-browser';

import { ResourcePathNormalizer } from './resource-path-normalizer';
import { ComponentBindingsAnalizer } from './component-bindings-analizer';

@Injectable()
export class CurrentResolverService {
  private location: Location;

  constructor(private http: HttpClient,
              private componentBindingsAnalizer: ComponentBindingsAnalizer,
              private resourcePathNormalizer: ResourcePathNormalizer,
              @Inject(DOCUMENT) { location }: Document) {
    this.location = location;
  }

  resolve(target: any): void {
    const bindings = this.componentBindingsAnalizer.getBindings(target);

    if (bindings.length === 0) {
      return;
    }

    const resource = this.location.pathname;
    const normalizedResource = this.resourcePathNormalizer.normalize(resource);

    this.http
      .get(normalizedResource)
      .subscribe(source => bindings.forEach(binder => binder.bind(target, source)));
  }
}
