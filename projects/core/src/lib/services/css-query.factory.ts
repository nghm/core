import { Injectable } from '@angular/core';
import { selectAll } from 'css-select';
import { HypermediaAdapter } from './hypermedia-adapter';

@Injectable()
export class CssQueryFactory {
  adapter = new HypermediaAdapter();

  make(queryString: string): (source) => Array<any> {
    return source => {
      this.bindParents(source, undefined);

      return selectAll(queryString, source, { adapter: this.adapter });
    };
  }

  bindParents(node, parent, level = 0) {
    node.parent = parent;
    node.type = level === 0 ? 'root' : 'child';

    if (node.entities) {
      node.entities.forEach(entity => this.bindParents(entity, node, level + 1));
    }
  }
}
