import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@nghm/router';
import { FormsModule } from '@nghm/forms';
import { MaterialFieldsModule } from '@nghm/material-fields';

import { DevpageComponent } from './devpage.component';
import { EntityOutletComponent } from './entity-outlet';
import { MatExpansionModule, MatDividerModule, MatTabsModule, MatButtonModule, MatChipsModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialFieldsModule,
    MatExpansionModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [DevpageComponent, EntityOutletComponent],
  exports: [DevpageComponent]
})
export class MaterialDevpageModule { }
