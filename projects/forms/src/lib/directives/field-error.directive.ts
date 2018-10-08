import { TemplateRef, Directive, Optional, Injector } from '@angular/core';
import { FieldConfigurationComponent } from '../components/field-config/field-config.component';

@Directive({
  selector: '[hmError]'
})
export class FieldErrorDirective {
  named: string;

  constructor(public templateRef: TemplateRef<{ $implicit: { name: string, value: any }; field: string }>, injector: Injector) {
    const fieldConfiguration = injector.get(FieldConfigurationComponent, { name: '*', override: false });

    if (fieldConfiguration) {
      const { override, name } = fieldConfiguration;
      this.named = (override && override.named) || name;
    }
  }
}
