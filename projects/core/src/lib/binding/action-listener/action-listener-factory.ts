import { Injectable } from '@angular/core';

import { ActionListenerBoundMetadata } from './action-listener.bound-metadata';
import { ActionListenerBinder } from './action-listener-binder';
import { MetaBinderFactory } from '../meta-binder-factory';
import { ActionExecutorService } from '../../services/action-executor';
import { LifetimeEvents } from '../../services/lifetime-events';

@Injectable()
export class ActionListenerFactory implements MetaBinderFactory {
  constructor(private actionExecutor: ActionExecutorService, private lifetime: LifetimeEvents) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionListenerBoundMetadata;
  }

  make(meta: ActionListenerBoundMetadata): ActionListenerBinder {
    return new ActionListenerBinder(meta, this.actionExecutor);
  }
}
