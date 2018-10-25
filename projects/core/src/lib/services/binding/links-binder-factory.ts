import { Injectable } from '@angular/core';

import { LinksBoundMetadata } from '../../decorators/links.bound-metadata';
import { UrlInterpolator } from '../url-interpolator';
import { LinksBinder } from './links-binder';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class LinksBinderFactory implements MetaBinderFactory {
  constructor(private urlInterpolator: UrlInterpolator) { }

  canMake(meta: any): boolean {
    return meta instanceof LinksBoundMetadata;
  }

  make(meta: LinksBoundMetadata): LinksBinder {
    return new LinksBinder(meta, this.urlInterpolator);
  }
}
