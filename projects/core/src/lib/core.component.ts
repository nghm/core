import { Component } from '@angular/core';
import { Property } from './decorators/property.decorator';

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
