import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@nghm/forms';

import { HomePageComponent } from './containers/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: HomePageComponent
    }])
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
