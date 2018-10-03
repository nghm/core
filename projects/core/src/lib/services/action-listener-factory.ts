import { Injectable } from '@angular/core';

import { ActionListenerBoundMetadata } from '../decorators';
import { ActionListenerBinder } from './action-listener-binder';
import { MetaBinderFactory } from './meta-binder-factory';
import { ActionExecutor } from './action-executor';

@Injectable()
export class ActionListenerFactory implements MetaBinderFactory {
  constructor(private actionExecutor: ActionExecutor) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionListenerBoundMetadata;
  }

  make(meta: ActionListenerBoundMetadata): ActionListenerBinder {
    return new ActionListenerBinder(meta, this.actionExecutor);
  }
}
