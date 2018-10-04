import { Injectable } from '@angular/core';
import * as CSSselect from 'css-select';

@Injectable()
export class CssQueryFactory {
  make(queryString: string): (source) => Array<any> {
    const select = CSSselect;
    const query = CSSselect.compile(queryString);

    return source => {
      bindParent(source, undefined);

      return select
        .selectAll(query, source, { adapter: new HypermediaAdapter() })
        .map(node => node['source']);
    };
  }
}

interface HypermediaNode {
  class?: Array<string>;
  entities?: Array<any>;
  properties?: any;
  parent?: HypermediaNode;
}

class HypermediaAdapter implements CSSselect.Adapter<HypermediaNode, HypermediaNode> {
  isTag(node: HypermediaNode): node is HypermediaNode {
    return true;
  }
  existsOne(test: CSSselect.Predicate<HypermediaNode>, elems: HypermediaNode[]): boolean {
    return elems.some(elem => test(elem));
  }
  getAttributeValue(elem: HypermediaNode, name: string): string {
    return elem && elem.properties && elem.properties[name];
  }
  getChildren(node: HypermediaNode): HypermediaNode[] {
    return node && node.entities;
  }
  getName(elem: HypermediaNode): string {
    return 'div';
  }
  getParent(node: HypermediaNode): HypermediaNode {
    return node.parent;
  }
  getSiblings(node: HypermediaNode): HypermediaNode[] {
    return node && node.parent && node.parent.entities;
  }
  getText(node: HypermediaNode): string {
    return '';
  }
  hasAttrib(elem: HypermediaNode, name: string): boolean {
    return elem && elem.properties && elem.properties[name];
  }
  removeSubsets(nodes: HypermediaNode[]): HypermediaNode[] {
    const iterator = tranverse({ entities: nodes }) as any;
    const newArray = [];
    const inserted = {};

    for (const node of iterator) {
      const parents = getParents(node);

      if (!inserted[node] && !parents.some(parent => inserted[parent])) {
        inserted[node] = true;

        newArray.push(node);
      }
    }

    return newArray;
  }
  findAll(test: CSSselect.Predicate<HypermediaNode>, nodes: HypermediaNode[]): HypermediaNode[] {
    const iterator = tranverse({ entities: nodes });

    return Array.from(iterator);
  }
  findOne(test: CSSselect.Predicate<HypermediaNode>, elems: HypermediaNode[]): HypermediaNode {
    const iterator = tranverse({ entities: elems }) as any;

    for (const node of iterator) {
      if (test(node)) {
        return node;
      }
    }
  }
}

function getParents(node) {
  const parents = [];
  let parent = node.parent;

  while (parent !== undefined) {
    parents.push(parent);

    parent = node.parent;
  }

  return parents;
}

function * tranverse(node: HypermediaNode): Iterable<HypermediaNode> {
  if (!node) {
    return;
  }

  const explore = [node];

  while (explore.length > 0) {
    const current = explore.pop();

    yield current;

    if (current.entities) {
      for (const child of current.entities) {
        explore.push(child);
      }
    }
  }
}

function bindParent(node, parent) {
  node.parent = parent;

  if (node.entities) {
    node.entities.forEach(entity => bindParent(entity, node));
  }
}
