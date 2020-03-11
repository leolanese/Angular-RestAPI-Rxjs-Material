import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { RestObservableComponent } from "./rest-observable/rest-observable.component";
import { RestObservableService } from "./rest-observable/rest-observable.service";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [AppComponent, RestObservableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [RestObservableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
