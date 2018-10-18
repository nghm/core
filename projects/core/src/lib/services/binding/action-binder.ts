import { ActionBoundMetadata } from '../../decorators';
import { Binder } from './binder';

export class ActionBinder implements Binder {
  constructor(
    private meta: ActionBoundMetadata
  ) { }

  bind(target, source): void {
    const { actionName, bindingName } = this.meta;
    const { actions = [] } = source;
    const action = actions.find(({ name }) => name === actionName);

    if (!action) {
      return;
    }

    action.parent = target;
    target[bindingName] = action;
  }
}
