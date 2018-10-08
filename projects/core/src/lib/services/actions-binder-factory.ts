import { Injectable } from '@angular/core';

import { ActionsBoundMetadata } from '../decorators';
import { ActionsBinder } from './actions-binder';
import { ActionExecutor } from './action-executor';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class ActionsBinderFactory implements MetaBinderFactory {
  constructor(private actionExecutor: ActionExecutor) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionsBoundMetadata;
  }

  make(meta: ActionsBoundMetadata): ActionsBinder {
    return new ActionsBinder(meta, this.actionExecutor);
  }
}
