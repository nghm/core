import { Component } from '@angular/core';
import { Property } from './decorators';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: []
})
export class CoreComponent {
  @Property() title;
}
