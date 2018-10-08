import { Input, Component } from '@angular/core';
import { ExplorableEntitiy } from './explorable-entitiy';

@Component({
  selector: 'hm-entity-outlet',
  template: `
  <mat-card>
    <ng-container *ngIf="entity.properties as properties">
      <mat-card-title>{{properties.name || properties.title || properties.id}}</mat-card-title>
      <mat-card-content>
        <h4>Properties:</h4>
        <code>
          {{ properties | json}}
        </code>
      </mat-card-content>
    </ng-container>
    ,ng
  </mat-card>
  `
})
export class EntityOutletComponent {
  @Input() entity: ExplorableEntitiy;
}
