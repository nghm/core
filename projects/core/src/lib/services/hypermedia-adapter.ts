import { HypermediaNode } from './hypermedia-node';

import { Adapter, Predicate } from 'css-select';

export class HypermediaAdapter implements Adapter<HypermediaNode, HypermediaNode> {
  isTag(node: HypermediaNode): node is HypermediaNode {
    return true;
  }
  existsOne(test: Predicate<HypermediaNode>, elems: HypermediaNode[]): boolean {
    for (let i = 0, l = elems.length; i < l; i++) {
      if (this.isTag(elems[i]) && (test(elems[i]) || (elems[i].entities.length > 0 &&
        this.existsOne(test, elems[i].entities)))) {
        return true;
      }
    }
    return false;
  }
  getAttributeValue(elem: HypermediaNode, name: string): string {
    if (name === 'class') {
      return (elem.class || []).join(' ');
    }
    return elem.properties && elem.properties[name];
  }
  getChildren(node: HypermediaNode): HypermediaNode[] {
    return node.entities;
  }
  getName(elem: HypermediaNode): string {
    return elem.type;
  }
  getParent(node: HypermediaNode): HypermediaNode {
    return node.parent;
  }
  getSiblings(node: HypermediaNode): HypermediaNode[] {
    return node.parent ? this.getChildren(node.parent) : [node];
  }
  getText(node: HypermediaNode): string {
    return '';
  }
  hasAttrib(elem: HypermediaNode, name: string): boolean {
    return elem && elem.properties && !!elem.properties[name];
  }
  removeSubsets(nodes: HypermediaNode[]): HypermediaNode[] {
    let idx = nodes.length, node, ancestor, replace;
    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while (--idx > -1) {
      node = ancestor = nodes[idx];
      // Temporarily remove the node under consideration
      nodes[idx] = null;
      replace = true;
      while (ancestor) {
        if (nodes.indexOf(ancestor) > -1) {
          replace = false;
          nodes.splice(idx, 1);
          break;
        }
        ancestor = ancestor.parent;
      }
      // If the node has been found to be unique, re-insert it.
      if (replace) {
        nodes[idx] = node;
      }
    }
    return nodes;
  }
  findAll(test, rootElems) {
    const result = [];
    const stack = rootElems.slice();
    while (stack.length) {
      const elem = stack.shift();
      if (!this.isTag(elem)) {
        continue;
      }
      if (elem.entities && elem.entities.length > 0) {
        stack.unshift.apply(stack, elem.entities);
      }
      if (test(elem)) {
        result.push(elem);
      }
    }
    return result;
  }
  findOne(test: Predicate<HypermediaNode>, elems: HypermediaNode[]): HypermediaNode {
    let elem = null;
    for (let i = 0, l = elems.length; i < l && !elem; i++) {
      if (!this.isTag(elems[i])) {
        continue;
      } else if (test(elems[i])) {
        elem = elems[i];
      } else if (elems[i].entities.length > 0) {
        elem = this.findOne(test, elems[i].entities);
      }
    }
    return elem;
  }
}
