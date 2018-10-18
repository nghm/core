import { Injectable } from '@angular/core';

import { ActionBoundMetadata } from '../../decorators';
import { ActionBinder } from './action-binder';
import { ActionExecutorService } from '../action-executor';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class ActionBinderFactory implements MetaBinderFactory {
  constructor(private actionExecutor: ActionExecutorService) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionBoundMetadata;
  }

  make(meta: ActionBoundMetadata): ActionBinder {
    return new ActionBinder(meta, this.actionExecutor);
  }
}
