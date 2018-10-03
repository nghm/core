import { Injectable } from '@angular/core';

import { ActionBoundMetadata } from '../decorators';
import { ActionBinder } from './action-binder';
import { ActionExecutor } from './action-executor';

@Injectable()
export class ActionBinderFactory {
  constructor(private actionExecutor: ActionExecutor) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionBoundMetadata;
  }

  make(meta: ActionBoundMetadata): ActionBinder {
    return new ActionBinder(meta, this.actionExecutor);
  }
}
