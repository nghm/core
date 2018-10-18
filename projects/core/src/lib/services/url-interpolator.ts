import { Injectable } from '@angular/core';

@Injectable()
export class UrlInterpolator {
  INTERPOLATION_PATTERN = /\{( *[a-zA-Z_]+ *)\}/;

  hasInterpolationParameters(href: string): boolean {
    return Boolean(this.INTERPOLATION_PATTERN.exec(href));
  }

  interpolate(href: string, params: any) {
    return href.replace(this.INTERPOLATION_PATTERN, (_, group) => {
      const trimmedGroup = group.trim();

      return params[trimmedGroup].toString();
    });
  }
}
