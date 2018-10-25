
import { LinksBoundMetadata } from './links.bound-metadata';
import { UrlInterpolator } from '../../services/url-interpolator';
import { Binder } from '../binder';

export class LinksBinder implements Binder {
  constructor(
    private meta: LinksBoundMetadata,
    private urlInterpolator: UrlInterpolator
  ) { }

  bind(target, source): void {
    const { nameFactory, linkQueries, bindingName } = this.meta;
    const { links: sourceLinks = [] } = source;
    const links =
      linkQueries.length === 0 && sourceLinks ||
      sourceLinks.filter(({ rel: rels = []}) =>
        linkQueries.some(linkQuery =>
          linkQuery.every(requiredRel => rels.includes(requiredRel))
        )
      ) || {} as any;

    const finalLinks = [];

    for (const link of links) {
      const { href, rel } = link;
      const hasInterpolationParameters = this.urlInterpolator.hasInterpolationParameters(href);
      const make = (parameters => hasInterpolationParameters && this.urlInterpolator.interpolate(href, parameters) || href);
      const name = nameFactory(link);

      finalLinks.push({
        href, rel, make, name
      });
    }

    target[bindingName] = finalLinks;
  }
}
