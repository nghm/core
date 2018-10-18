import { LinkBoundMetadata } from '../decorators';
import { UrlInterpolator } from './url-interpolator';
import { Binder } from './binder';

export class LinkBinder implements Binder {
  constructor(
    private meta: LinkBoundMetadata,
    private urlInterpolator: UrlInterpolator
  ) { }

  bind(target, source): void {
    const { linkName, bindingName } = this.meta;
    const { links = [] } = source;
    const { href } = links.find(({ rel = []}) => rel.includes(linkName));

    const hasInterpolationParameters = this.urlInterpolator.hasInterpolationParameters(href);
    const interpolationMethod = (parameters => hasInterpolationParameters && this.urlInterpolator.interpolate(href, parameters) || href);

    Object.defineProperty(target, bindingName, {
      get: () => interpolationMethod
    });
  }
}
