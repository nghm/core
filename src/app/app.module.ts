import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@nghm/core';

import { CoreModule as AppCoreModule } from './core/core.module';
import { AppRootComponent } from './core/containers/app.component';

import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    AppCoreModule,

    RouterModule.forRoot(routes),
    CoreModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
