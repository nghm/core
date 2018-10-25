import { ActionsBoundMetadata } from '../../binding/actions/actions.bound-metadata';
import { Binder } from './binder';
import { ActionExecutorService } from '../action-executor';

export class ActionsBinder implements Binder {
  constructor(
    private meta: ActionsBoundMetadata,
    private actionExecutor: ActionExecutorService
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

    target[bindingName] = finalActions;
  }
}
