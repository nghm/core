import { Injectable } from '@angular/core';

import { LinkBoundMetadata } from './link.bound-metadata';
import { UrlInterpolator } from '../../services/url-interpolator';
import { LinkBinder } from './link-binder';
import { MetaBinderFactory } from '../meta-binder-factory';

@Injectable()
export class LinkBinderFactory implements MetaBinderFactory {
  constructor(private urlInterpolator: UrlInterpolator) { }

  canMake(meta: any): boolean {
    return meta instanceof LinkBoundMetadata;
  }

  make(meta: LinkBoundMetadata): LinkBinder {
    return new LinkBinder(meta, this.urlInterpolator);
  }
}
