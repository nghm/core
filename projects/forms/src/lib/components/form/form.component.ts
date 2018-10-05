import { Component, Input, ComponentFactory } from '@angular/core';
import { InputComponentFactoryResolver } from '../../services/input-component-resolver.factory';

interface InputConfiguration  {
  name: string;
  value: any;
  type: string;
}

interface FieldConfiguration {
  name: string;
  componentFactory: ComponentFactory<any>;
  inputConfiguration: InputConfiguration;
}

@Component({
  selector: 'hm-form',
  templateUrl: 'form.component.html'
})
export class FormComponent {
  _action: Function;
  _fields: Iterable<FieldConfiguration>;

  @Input() set action(action: Function & { fields?: any }) {
    if (!action) {
      this._action = this._fields = undefined;

      return;
    }

    this._action = action;
    this._fields = this.getRemoteFieldConfiguration(action.fields);
  }

  constructor(private inputComponentFactoryResolver: InputComponentFactoryResolver) { }

  * getRemoteFieldConfiguration(fields: { [name: string]: InputConfiguration })
      : Iterable<FieldConfiguration> {
    const names = Object.keys(fields);

    for (const name of names) {
      const inputConfiguration = fields[name];
      const componentFactory = this.inputComponentFactoryResolver.resolve(inputConfiguration);

      yield { name, inputConfiguration, componentFactory };
    }
  }

  onSubmit(event) {
    event.preventDefault();
  }
}
