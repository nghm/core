/*
 * Public API Surface of core
 */

export { CoreModule } from './lib/core.module';

export { HypermediaRef } from './lib/services/hypermedia-ref';

export { Action, Ref, RootEntity, ActionListener, Actions, Classes,
  Entities, Entity, Link, Links, Properties, Property} from './lib/decorators';

export { UrlScopeTrimmer, APPLICATION_SCOPE } from './lib/services/url-scope-trimmer';
