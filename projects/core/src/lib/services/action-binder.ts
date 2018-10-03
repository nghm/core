import { ActionBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { ActionExecutor } from './action-executor';

export class ActionBinder implements Binder {
  constructor(
    private meta: ActionBoundMetadata,
    private actionExecutor: ActionExecutor
  ) { }

  bind(target, source): void {
    const { actionName } = this.meta;
    const { actions: { [actionName]: action } } = source;

    Object.defineProperty(target, actionName, {
      get: () => parameters => this.actionExecutor.execute(action, parameters)
    });
  }
}
