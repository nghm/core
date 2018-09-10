import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRootComponent } from './containers/app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppRootComponent],
  exports: [AppRootComponent]

})
export class CoreModule { }
