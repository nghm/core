import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'hm-action-dialog',
  exportAs: 'hmActionDialog',
  styleUrls: ['./action-dialog.component.css'],
  templateUrl: './action-dialog.component.html'
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
