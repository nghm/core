import { ActionBoundMetadata } from '../decorators';
import { Binder } from './binder';

export class ActionBinder implements Binder {
  constructor(
    private meta: ActionBoundMetadata
  ) { }

  bind(target, source): void {
    const { actionName } = this.meta;
    const { actions: { [actionName]: action } } = source;

    Object.defineProperty(target, actionName, {
      get: () => parameters => this.execute(action, parameters)
    });
  }

  execute(action: any, params: any) {
    console.log(action, params);
  }
}
