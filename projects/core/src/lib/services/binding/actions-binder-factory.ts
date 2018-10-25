import { Injectable } from '@angular/core';

import { ActionsBoundMetadata } from '../../binding/actions/actions.bound-metadata';
import { ActionsBinder } from './actions-binder';
import { ActionExecutorService } from '../action-executor';
import { MetaBinderFactory } from './meta-binder-factory';

@Injectable()
export class ActionsBinderFactory implements MetaBinderFactory {
  constructor(private actionExecutor: ActionExecutorService) {}

  canMake(meta: any): boolean {
    return meta instanceof ActionsBoundMetadata;
  }

  make(meta: ActionsBoundMetadata): ActionsBinder {
    return new ActionsBinder(meta, this.actionExecutor);
  }
}
