import { Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExplorableEntitiy } from './explorable-entitiy';

@Component({
  selector: 'hm-entity-outlet',
  templateUrl: './entity-outlet.html',
  styleUrls: ['./entity-outlet.css']
})
export class EntityOutletComponent {
  @Input() open = false;
  @Input() entity: ExplorableEntitiy;

  constructor(public sanitize: DomSanitizer) { }
}
