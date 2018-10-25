import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@nghm/router';
import { FormsModule } from '@nghm/forms';
import { MaterialFieldsModule } from '@nghm/material-fields';

import { MatExpansionModule, MatDividerModule, MatTabsModule, MatButtonModule,
  MatChipsModule, MatToolbarModule, MatCardModule, MatIconModule, MatMenuModule,
  MatSnackBarModule, MatProgressBarModule } from '@angular/material';

import { DevpageComponent } from './devpage.component';
import { EntityOutletComponent } from './entity-outlet';
import { ActionDialogComponent } from './action-dialog.component';

const COMPONENTS = [DevpageComponent, ActionDialogComponent, EntityOutletComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialFieldsModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class MaterialDevpageModule { }
