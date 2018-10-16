import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'hm-action-dialog',
  exportAs: 'hmActionDialog',
  styleUrls: ['./action-dialog.component.css'],
  template: `
  <ng-template #actionDialog>
    <h3 class="capitalize mat-h3" *ngIf="action.fields">{{ action.name }}</h3>
    <hm-form [action]="action.execute" [ngClass]="{ 'fieldless-action': !action.fields }">
      <div *hmLabel="let name" class="capitalize">{{ name }}</div>
      <div *hmError="let name" class="capitalize">{{ name }}</div>

      <div class="action-buttons" *hmSubmit>
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-button color="primary">
          <ng-container *ngIf="action.fields else noFields">Execute</ng-container>
          <ng-template #noFields>
            <div class="capitalize">{{ action.name }}</div>
          </ng-template>
        </button>
      </div>
    </hm-form>
  </ng-template>
`
})
export class ActionDialogComponent {
  @Input() action;
  @ViewChild('actionDialog') templateRef: TemplateRef<any>;

  dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  open(): void {
    this.dialogRef = this.dialog.open(this.templateRef);
  }
}
