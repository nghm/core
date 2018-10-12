import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'hm-action-dialog',
  exportAs: 'hmActionDialog',
  template: `
  <ng-template #actionDialog>
    <h3 class="capitalize mat-h3" *ngIf="action.fields">{{ action.name }}</h3>
    <hm-form [action]="action.execute" [ngClass]="{ 'fieldless-action': !action.fields }">
      <div *hmLabel="let name" class="capitalize">{{ name }}</div>
      <div *hmError="let name" class="capitalize">{{ name }}</div>

      <button *hmSubmit mat-button>
        <ng-container *ngIf="action.fields else noFields">Execute</ng-container>
        <ng-template #noFields>
          <div class="capitalize">{{ action.name }}</div>
        </ng-template>
      </button>
    </hm-form>
  </ng-template>
`
})
export class ActionDialogComponent {
  @Input() action;
  @ViewChild('actionDialog') templateRef: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  open(): void {
    this.dialog.open(this.templateRef);
  }
}
