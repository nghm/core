import { ActionsBoundMetadata } from '../decorators';
import { Binder } from './binder';
import { ActionExecutor } from './action-executor';

export class ActionsBinder implements Binder {
  constructor(
    private meta: ActionsBoundMetadata,
    private actionExecutor: ActionExecutor
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const { actions = [] } = source;

    const finalActions = [];

    for (const action of actions) {
      const execute: Function & { fields?: any } = parameters => this.actionExecutor.execute(action, parameters);

      execute.fields = action.fields || [];

      finalActions.push({
        ...action, execute
      });
    }

    Object.defineProperty(target, bindingName, {
      get: () => finalActions
    });
  }
}
