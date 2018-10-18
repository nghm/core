export interface HypermediaNode {
  type: string;
  class?: Array<string>;
  entities?: Array<any>;
  properties?: any;
  parent?: HypermediaNode;
}
