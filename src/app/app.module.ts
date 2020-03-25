import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { RestObservableComponent } from './rest-observable/rest-observable.component';

import { RestObservableService } from './services/rest-observable.service';

import { MaterialModule } from './rest-observable/material-module';

@NgModule({
  declarations: [AppComponent, RestObservableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    RestObservableService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
