
import { LinksBoundMetadata } from '../decorators';
import { UrlInterpolator } from './url-interpolator';
import { Binder } from './binder';

export class LinksBinder implements Binder {
  constructor(
    private meta: LinksBoundMetadata,
    private urlInterpolator: UrlInterpolator
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const { links = {} } = source;

    const finalLinks = [];

    Object.keys(links).forEach(name => {
      const { href } = links[name];
      const hasInterpolationParameters = this.urlInterpolator.hasInterpolationParameters(href);
      const make = (parameters => hasInterpolationParameters && this.urlInterpolator.interpolate(href, parameters) || href);

      finalLinks.push({
        ...links[name],
        name, make
      });
    });

    Object.defineProperty(target, bindingName, {
      get: () => finalLinks
    });
  }
}
