import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@nghm/forms';
import { RouterModule as HypermediaRouterModule } from '@nghm/router';

import { HomePageComponent } from './containers/home-page/home-page.component';
import { MatButtonModule, MatSidenavModule, MatCardModule,
  MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HypermediaRouterModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    RouterModule.forChild([{
      path: '',
      component: HomePageComponent
    }])
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
