import { Component, Input, OnChanges, Host, Optional, Attribute } from '@angular/core';

import { InputConfiguration } from '../field-configuration/input-configuration';
import { ReplaySubject, from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { OverrideFieldNamedDirective } from '../field-configuration/field-configuration.component';

@Component({
  selector: 'hm-form-field',
  templateUrl: './field-config.component.html'
})
export class FieldConfigurationComponent implements InputConfiguration, OnChanges {
  private inputConfigurationSubject = new ReplaySubject<InputConfiguration>(1);

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

  inputConfiguration = from(this.inputConfigurationSubject)
    .pipe(
      debounceTime(10)
    );

  constructor(
    @Optional() @Host() public override: OverrideFieldNamedDirective,
    @Attribute('name') public name: string) {
    this.name = this.name === null ? undefined : this.name;
  }

  ngOnChanges(): void {
    const configuration = {} as InputConfiguration;
    const mappable = ['name', 'value', 'type', 'required',
                      'max', 'min', 'maxLength', 'minLength',
                      'email', 'pattern', 'disabled'];

    for (const key of mappable) {
      if (this[key] !== undefined) {
        configuration[key] = this[key];
      }
    }

    this.inputConfigurationSubject.next(configuration);
  }
}
