import { Component, Input, OnChanges, Host, Optional, ContentChild, TemplateRef } from '@angular/core';

import { InputConfiguration } from '../field-configuration/input-configuration';
import { ReplaySubject, from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { OverrideFieldNamedDirective } from '../field-configuration/field-configuration.component';
import { FieldLabelDirective } from '../../directives/field-label.directive';

@Component({
  selector: 'hm-form-field',
  templateUrl: './field-config.component.html'
})
export class FieldConfigurationComponent implements InputConfiguration, OnChanges {
  private inputConfigurationSubject = new ReplaySubject<InputConfiguration>(1);

  @Input() name: string;
  @Input() value: any;
  @Input() type: string;

  @Input() required?: boolean;
  @Input() max?: number;
  @Input() min?: number;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() email?: boolean;
  @Input() pattern?: string;

  inputConfiguration = from(this.inputConfigurationSubject)
    .pipe(
      debounceTime(10)
    );

  constructor(@Optional() @Host() private override: OverrideFieldNamedDirective) {}

  ngOnChanges(): void {
    const configuration = {} as InputConfiguration;
    const mappable = ['name', 'value', 'type', 'required', 'max', 'min', 'maxLength', 'minLength', 'email', 'pattern'];

    for (const key of mappable) {
      if (this[key] !== undefined) {
        configuration[key] = this[key];
      }
    }

    this.inputConfigurationSubject.next(configuration);
  }
}
