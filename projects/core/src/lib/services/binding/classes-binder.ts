import { ClassesBoundMetadata } from '../../binding/classes/classes.bound-metadata';
import { Binder } from './binder';

export class ClassesBinder implements Binder {
  constructor(
    private meta: ClassesBoundMetadata
  ) { }

  bind(target, source): void {
    const { bindingName } = this.meta;
    const { class: classes = [] } = source;

    Object.defineProperty(target, bindingName, {
      get: () => classes
    });
  }
}
