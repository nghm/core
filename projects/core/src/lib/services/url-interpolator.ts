import { Injectable } from '@angular/core';

@Injectable()
export class UrlInterpolator {
  interpolate(href: string, params: any) {
    const regex = /\{( *[a-zA-Z_]+ *)\}/;
    return href.replace(regex, (match, group) => {
      const trimmedGroup = group.trim();

      return params[trimmedGroup].toString();
    });
  }
}
