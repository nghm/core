import { Input, Component } from '@angular/core';
import { ExplorableEntitiy } from './explorable-entitiy';

@Component({
  selector: 'hm-entity-outlet',
  template: `
  <mat-accordion>
    <mat-expansion-panel [expanded]="open">
      <mat-expansion-panel-header>
        <mat-panel-title *ngIf="entity.properties as properties">
          {{ properties.name || properties.title || properties.id }}
        </mat-panel-title>
        <mat-panel-description *ngIf="entity.classes">
          <mat-chip-list class="chip-list">
            <mat-chip disableRipple="true" *ngFor="let class of entity.classes">{{ class }}</mat-chip>
          </mat-chip-list>
        </mat-panel-description>
      </mat-expansion-panel-header>
      <mat-tab-group>
        <mat-tab label="Properties" *ngIf="entity.properties as properties">
          <div class="code-wrapper">
            <pre>{{ properties | json}}</pre>
          </div>
        </mat-tab>
        <mat-tab label="Entities" *ngIf="entity?.entities.length > 0">
          <hm-entity-outlet *ngFor="let entity of entity.entities" [entity]="entity"></hm-entity-outlet>
        </mat-tab>
        <mat-tab label="Actions" *ngIf="entity?.actions.length > 0">
          <div *ngFor="let action of entity.actions">
            <h3 class="capizalize" *ngIf="action.fields">{{ action.name }}</h3>
            <hm-form [action]="action.execute" [ngClass]="{ 'fieldless-action': !action.fields }">
              <div *hmLabel="let name" class="capizalize">{{ name }}</div>
              <div *hmError="let name" class="capizalize">{{ name }}</div>

              <button *hmSubmit mat-button>
                <ng-container *ngIf="action.fields else noFields">Execute</ng-container>
                <ng-template #noFields>
                  <div class="capizalize">{{ action.name }}</div>
                </ng-template>
              </button>
            </hm-form>
          </div>
        </mat-tab>
        <mat-tab label="Links" *ngIf="entity?.links.length > 0">
          <mat-chip-list class="links">
            <mat-chip mat-button *ngFor="let link of entity.links" [hmLink]="link.href" color="primary" class="link">
              <span *ngFor="let rel of link.rel; let last = last">{{ rel }}</span>
            </mat-chip>
          </mat-chip-list>
        </mat-tab>
      </mat-tab-group>
    </mat-expansion-panel>
  </mat-accordion>
  `,
  styleUrls: ['./entity-outlet.css']
})
export class EntityOutletComponent {
  @Input() open = false;
  @Input() entity: ExplorableEntitiy;
}
