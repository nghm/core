import { TemplateRef, Directive } from '@angular/core';

@Directive({
  selector: '[hmLabel]'
})
export class FieldLabelDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
