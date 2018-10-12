import { Input, Component, Sanitizer } from '@angular/core';
import { ExplorableEntitiy } from './explorable-entitiy';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hm-entity-outlet',
  template: `
    <mat-card>
      <div class="classes" [style.background]="sanitize.bypassSecurityTrustStyle(entity.background)">
        <mat-card-header>
          <div mat-card-avatar class="avatar">
            <mat-icon>star</mat-icon>
          </div>
        </mat-card-header>
        <h2 class="mat-h2" *ngIf="entity.properties as properties">
          {{ properties.name || properties.title || properties.id }}
        </h2>
        <div class="top-right-buttons">
          <ng-container *ngIf="entity?.links.length > 0">
            <mat-menu #linkMenu="matMenu">
              <a mat-menu-item *ngFor="let link of entity.links" [hmLink]="link.href" color="primary">
                <span *ngFor="let rel of link.rel; let last = last">{{ rel }}</span>
              </a>
            </mat-menu>
            <button mat-icon-button [matMenuTriggerFor]="linkMenu" class="link-menu-icon">
              <mat-icon>link</mat-icon>
            </button>
          </ng-container>
          <ng-container *ngIf="entity?.actions.length > 0">
            <mat-menu #actionMenu="matMenu">
              <ng-container *ngFor="let action of entity.actions">
                <hm-action-dialog #dialog="hmActionDialog" [action]="action"></hm-action-dialog>
                <button mat-menu-item color="primary" class="capitalize" (click)="dialog.open()">
                  {{ action.name }}
                </button>
              </ng-container>
            </mat-menu>
            <button mat-icon-button [matMenuTriggerFor]="actionMenu" class="link-menu-icon">
              <mat-icon>more_vert</mat-icon>
            </button>
          </ng-container>
        </div>
        <mat-card-subtitle *ngIf="entity.self as self" class="subtitle">
          <small>GET@:</small> <a [href]="self.href">{{self.href}}</a>
        </mat-card-subtitle>
        <mat-chip-list *ngIf="entity.classes" class="chip-list">
          <mat-chip disableRipple="true" *ngFor="let class of entity.classes" class="focused-chip">{{ class }}</mat-chip>
        </mat-chip-list>
      </div>
      <div>
        <h4 class="mat-h4"><i>Properties:</i></h4>
        <div class="code-wrapper" *ngIf="entity.properties as properties"><pre>{{properties | json}}</pre></div>
      </div>
      <div *ngIf="entity?.entities.length > 0" class="entities">
        <h4 class="mat-h4"><i>Entities:</i></h4>
        <hm-entity-outlet *ngFor="let entity of entity.entities" [entity]="entity"></hm-entity-outlet>
      </div>
    </mat-card>
  `,
  styleUrls: ['./entity-outlet.css']
})
export class EntityOutletComponent {
  @Input() open = false;
  @Input() entity: ExplorableEntitiy;

  constructor(public sanitize: DomSanitizer) { }

  getIcon() {
  }
}
