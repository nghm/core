import { TemplateRef, Directive } from '@angular/core';

@Directive({
  selector: '[hmSubmit]'
})
export class FormSubmitDirective {
  constructor(public templateRef: TemplateRef<any>) {  }
}
