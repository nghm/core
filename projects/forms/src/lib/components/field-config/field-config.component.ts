import { Component, Input, OnChanges, Host, Optional, Attribute } from '@angular/core';

import { InputConfiguration } from '../field-configuration/input-configuration';
import { ReplaySubject, from } from 'rxjs';
import { OverrideFieldNamedDirective } from '../field-configuration/field-configuration.component';

@Component({
  selector: 'hm-form-field',
  templateUrl: './field-config.component.html'
})
export class FieldConfigurationComponent implements InputConfiguration, OnChanges {
  private inputConfigurationSubject = new ReplaySubject<InputConfiguration>(1);
  component: { pack: string, name: string };

  @Input() value: any;
  @Input() type: string;


  @Input() required?: boolean;
  @Input() max?: number;
  @Input() min?: number;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() email?: boolean;
  @Input() pattern?: string;

  @Input() disabled?: boolean;

  inputConfiguration = from(this.inputConfigurationSubject);

  constructor(
    @Optional() @Host() public override: OverrideFieldNamedDirective,
    @Attribute('name') public name: string,
    @Attribute('component') component: string) {
    this.name = this.name === null ? undefined : this.name;

    if (component) {
      const componentSelector = component.split('|');

      if (componentSelector.length !== 2) {
        throw new Error('The component selector is not in the correct format!');
      }

      this.component = {
        name: componentSelector[1],
        pack: componentSelector[0]
      };
    }
  }

  getConfiguration(): any {
    const configuration = {} as InputConfiguration;
    const mappable = ['name', 'value', 'type', 'required',
                      'max', 'min', 'maxLength', 'minLength',
                      'email', 'pattern', 'disabled', 'component'];

    for (const key of mappable) {
      if (this[key] !== undefined) {
        configuration[key] = this[key];
      }
    }

    return configuration;
  }

  ngOnChanges(): void {
    this.inputConfigurationSubject.next(this.getConfiguration());
  }
}
