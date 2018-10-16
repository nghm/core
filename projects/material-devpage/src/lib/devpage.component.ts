import { Component } from '@angular/core';
import { RootEntity, ActionListener, HypermediaRef } from '@nghm/core';
import { ExplorableEntitiy } from './explorable-entitiy';
import { MatDialog } from '@angular/material';

@Component({
  template: `
  <hm-entity-outlet *ngIf="entity" [entity]="entity" [open]="true"></hm-entity-outlet>`
})
export class DevpageComponent {
  @RootEntity(ExplorableEntitiy) entity: ExplorableEntitiy;

  @ActionListener('*', 'success')
  refresh(): void {
    this.dialog.closeAll();

    this.hypermediaRef.fetch();
  }

  constructor(public dialog: MatDialog, public hypermediaRef: HypermediaRef) {}
}
