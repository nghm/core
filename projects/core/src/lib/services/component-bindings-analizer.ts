import { Injectable } from '@angular/core';
import { getSourceMetadata, PropertyBoundMetadata, LinkBoundMetadata } from '../decorators';

@Injectable()
export class ComponentBindingsAnalizer {
  getBindings(container: any): Array<Binder> {
    const metadata = getSourceMetadata(container);

    return metadata
      .map(meta => {
        if (meta instanceof PropertyBoundMetadata) {
          return new PropertyBinder(meta);
        }

        if (meta instanceof LinkBoundMetadata) {
          return new LinkBinder(meta);
        }
      });
  }
}

interface Binder {
  bind(target, source): void;
}

export class PropertyBinder implements Binder {
  constructor(private propertyBoundMetadata: PropertyBoundMetadata) { }

  bind(target, source): void {
    const { propertyName } = this.propertyBoundMetadata;
    const { properties: { [propertyName]: sourceProperty } } = source;

    Object.defineProperty(target, propertyName, {
      get: () => sourceProperty
    });
  }
}

export class LinkBinder implements Binder {
  constructor(private linkBoundMetadata: LinkBoundMetadata) { }

  bind(target, source): void {
    const { linkName, params = false } = this.linkBoundMetadata;
    const { links: { [linkName]: { href } = { href: undefined } } } = source;

    Object.defineProperty(target, linkName, {
      get: () => params && (parameters => this.interpolate(href, parameters)) || href
    });
  }

  interpolate(href: string, params: any) {
    const regex = /\{( *[a-zA-Z_]+ *)\}/;
    return href.replace(regex, (match, group) => {
      const trimmedGroup = group.trim();

      return params[trimmedGroup].toString();
    });
  }
}
