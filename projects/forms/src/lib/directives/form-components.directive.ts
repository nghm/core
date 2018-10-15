import { TemplateRef, Directive } from '@angular/core';
import { InputComponentFactoryResolver } from '../services/input-component-resolver.factory';

@Directive({
  selector: '[hmComponents]'
})
export class FormComponentsDirective {
  constructor(public inputComponentResolver: InputComponentFactoryResolver, public templateRef: TemplateRef<any>) {  }
}
