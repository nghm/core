import { LinkBoundMetadata } from '../decorators';
import { UrlInterpolator } from './url-interpolator';
import { Binder } from './binder';

export class LinkBinder implements Binder {
  constructor(
    private meta: LinkBoundMetadata,
    private urlInterpolator: UrlInterpolator
  ) { }

  bind(target, source): void {
    const { linkName } = this.meta;
    const { links: { [linkName]: { href } = { href: undefined } } } = source;

    const hasInterpolationParameters = this.urlInterpolator.hasInterpolationParameters(href);
    const interpolationMethod = hasInterpolationParameters && (parameters => this.urlInterpolator.interpolate(href, parameters));

    Object.defineProperty(target, linkName, {
      get: () => interpolationMethod || href
    });
  }
}
