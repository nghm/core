import { Subscription } from 'rxjs';

import { Binder } from './binder';
import { ActionListenerBoundMetadata } from '../decorators';
import { ActionExecutor } from './action-executor';

export class ActionListenerBinder implements Binder {
  private eventSubscription: Subscription;

  constructor(private meta: ActionListenerBoundMetadata, private actionExecutor: ActionExecutor) {}

  bind(target) {
    const { event, handle } = this.meta;
    const [ action, name ] = event.split(':');

    this.eventSubscription = this.actionExecutor
      .on(action, name)
      .subscribe(_ => target[handle] && target[handle]());
  }

  dispose(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
