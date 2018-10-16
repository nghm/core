import { Component } from '@angular/core';
import { RootEntity, ActionListener, HypermediaRef } from '@nghm/core';
import { ExplorableEntitiy } from './explorable-entitiy';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  template: `
  <hm-entity-outlet *ngIf="entity" [entity]="entity" [open]="true"></hm-entity-outlet>`
})
export class DevpageComponent {
  @RootEntity(ExplorableEntitiy) entity: ExplorableEntitiy;

  @ActionListener('*', 'success')
  refresh(): void {
    this.dialog.closeAll();
    this.snackBar.open('The action was executed with success!', undefined, { duration: 5000 });

    this.hypermediaRef.fetch();
  }

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public hypermediaRef: HypermediaRef
  ) {}
}
