import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatToolbarModule, MatRippleModule } from '@angular/material';
import { RouterModule as HmRouterModule } from '@nghm/router';
import { CoreModule as CoreHypermediaModule } from '@nghm/core';

import { AppRootComponent } from './containers/app.component';

@NgModule({
  imports: [
    CommonModule,
    CoreHypermediaModule,
    HmRouterModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatRippleModule,

    HttpClientModule,
    RouterModule,
    RouterModule
  ],
  declarations: [AppRootComponent],
  exports: [AppRootComponent]

})
export class CoreModule { }
