import { Injectable } from '@angular/core';
import { UrlScopeTrimmer } from './url-scope-trimmer';

@Injectable()
export class ResourcePathNormalizer {
  constructor(private urlScopeTrimmer: UrlScopeTrimmer) { }

  normalize(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    return this.urlScopeTrimmer.unTrimToLocalScope(path);
  }
}
