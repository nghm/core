import { Injectable } from '@angular/core';

@Injectable()
export class CssQueryFactory {
  make(query: string): (source) => Array<any> {
    return ({ entities = [] as Array<any> } = {}) => [entities[0]];
  }
}
