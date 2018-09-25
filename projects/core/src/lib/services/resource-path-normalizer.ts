import { Injectable } from '@angular/core';

@Injectable()
export class ResourcePathNormalizer {
    normalize(path: string): string {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }

        return `/assets/resources/${path}.json`;
    }
}
