import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@nghm/core';
import { FormsModule } from '@nghm/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFieldsModule } from '@nghm/material-fields';

import { CoreModule as AppCoreModule } from './core/core.module';
import { AppRootComponent } from './core/containers/app.component';

import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,

    RouterModule.forRoot(routes),
    CoreModule,
    FormsModule,
    MaterialFieldsModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
