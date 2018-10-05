import { Component, Input } from '@angular/core';

@Component({
  selector: 'hm-field',
  templateUrl: './field.component.html'
})
export class FieldComponent {
  @Input() remoteConfiguration: any;
}
