import { ActionBoundMetadata } from '../decorators';
import { ActionBinder } from './action-binder';

export class ActionBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof ActionBoundMetadata;
  }

  make(meta: ActionBoundMetadata): ActionBinder {
    return new ActionBinder(meta);
  }
}
