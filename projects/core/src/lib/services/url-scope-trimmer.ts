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

  trimToScope(href: string, scope: string): any {
    const matchScope = this.scopes.find(({baseHref, scope: matchingScope}) => scope === matchingScope && href.startsWith(baseHref));

    if (matchScope === undefined) {
      return href;
    }

    return href.substr(matchScope.baseHref.length);
  }
}
