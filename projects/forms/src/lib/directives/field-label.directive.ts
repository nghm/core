import { TemplateRef, Directive } from '@angular/core';
import { FieldConfigurationComponent } from '../components/field-config/field-config.component';

@Directive({
  selector: '[hmLabel]'
})
export class FieldLabelDirective {
  named: string;

  constructor(public templateRef: TemplateRef<any>, { name, override: { named } }: FieldConfigurationComponent) {
    this.named = named || name;
  }
}
