import { Injectable, InjectionToken, Inject } from '@angular/core';

export const APPLICATION_SCOPE = new InjectionToken<{ name: string, baseHref: string }>('APPLICATION_SCOPE');

@Injectable()
export class UrlScopeTrimmer {
  constructor(@Inject(APPLICATION_SCOPE) public scopes = []) {}

  trimWhatever(href: string): any {
    const matchScope = this.scopes.find(({baseHref}) => href.startsWith(baseHref));

    if (matchScope === undefined) {
      return href;
    }

    return href.substr(matchScope.baseHref.length);
  }

  unTrimToLocalScope(href: string): any {
    const localScope = this.scopes.find(({name}) => name === 'local');

    if (localScope === undefined) {
      return href;
    }

    if (localScope.baseHref.endsWith('/') && href.startsWith('/')) {
      localScope.baseHref.substr(0, localScope.baseHref.length - 1);
    }

    if (!localScope.baseHref.endsWith('/') && !href.startsWith('/')) {
      return localScope.baseHref + '/' + href;
    }

    return localScope.baseHref + href;
  }

  trimToScope(href: string, scope: string): any {
    const matchScope = this.scopes.find(({baseHref, scope: matchingScope}) => scope === matchingScope && href.startsWith(baseHref));

    if (matchScope === undefined) {
      return href;
    }

    return href.substr(matchScope.baseHref.length);
  }
}
