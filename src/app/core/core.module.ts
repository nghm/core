import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RouterModule as HmRouterModule } from '@nghm/router';

import { AppRootComponent } from './containers/app.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    HmRouterModule,
    HttpClientModule,
    RouterModule,
    RouterModule
  ],
  declarations: [AppRootComponent],
  exports: [AppRootComponent]

})
export class CoreModule { }
