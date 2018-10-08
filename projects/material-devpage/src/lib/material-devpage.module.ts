import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevpageComponent } from './devpage.component';
import { EntityOutletComponent } from './entity-outlet';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [DevpageComponent, EntityOutletComponent],
  exports: [DevpageComponent]
})
export class MaterialDevpageModule { }
