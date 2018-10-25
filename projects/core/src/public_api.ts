/*
 * Public API Surface of core
 */

export { CoreModule } from './lib/core.module';

export { HypermediaRef } from './lib/services/hypermedia-ref';

export {
  Action,
  Actions,
  ActionListener,
  Classes,
  Entities,
  Entity,
  Link,
  Links,
  Properties,
  Property,
  Ref,
  RootEntity } from './lib/decorators';

export { UrlScopeTrimmer, APPLICATION_SCOPE } from './lib/services/url-scope-trimmer';
export { LifetimeEvents } from './lib/services/lifetime-events';
export { ActionExecutorService } from './lib/services/action-executor';
