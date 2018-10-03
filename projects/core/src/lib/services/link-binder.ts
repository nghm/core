import { LinkBoundMetadata } from '../decorators';
import { UrlInterpolator } from './url-interpolator';
import { Binder } from './binder';

export class LinkBinder implements Binder {
  constructor(
    private meta: LinkBoundMetadata,
    private urlInterpolator: UrlInterpolator
  ) { }

  bind(target, source): void {
    const { linkName, params = false } = this.meta;
    const { links: { [linkName]: { href } = { href: undefined } } } = source;

    Object.defineProperty(target, linkName, {
      get: () => params && (parameters => this.urlInterpolator.interpolate(href, parameters)) || href
    });
  }
}
