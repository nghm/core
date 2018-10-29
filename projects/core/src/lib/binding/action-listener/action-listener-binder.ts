import { Subscription } from 'rxjs';

import { Binder } from '../binder';
import { ActionListenerBoundMetadata } from './action-listener.bound-metadata';
import { ActionExecutorService } from '../../services/action-executor';

export class ActionListenerBinder implements Binder {
  private eventSubscription: Subscription;

  constructor(private meta: ActionListenerBoundMetadata, private actionExecutor: ActionExecutorService) {}

  bind(target) {
    const { actionName, events, bindingName } = this.meta;

    this.eventSubscription = this.actionExecutor
      .on(actionName, ...events)
      .subscribe(({ payload }) => target[bindingName] && target[bindingName](payload));
  }

  dispose(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
