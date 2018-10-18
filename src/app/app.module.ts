import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule, APPLICATION_SCOPE } from '@nghm/core';
import { FormsModule } from '@nghm/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFieldsModule } from '@nghm/material-fields';

import { CoreModule as AppCoreModule } from './core/core.module';
import { AppRootComponent } from './core/containers/app.component';

import { routes } from './routes';
import { MaterialDevpageModule } from '@nghm/material-devpage';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,

    RouterModule.forRoot(routes),
    CoreModule,
    MaterialDevpageModule,
    FormsModule,
    MaterialFieldsModule
  ],
  providers: [{ provide: APPLICATION_SCOPE, useValue: { name: 'local', baseHref: 'http://localhost:54287/api' }, multi: true }],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
