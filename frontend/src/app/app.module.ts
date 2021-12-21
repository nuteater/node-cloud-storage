import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSpinnerModule }  from 'ngx-spinner';
import {AccountComponent} from "./account/account.component";
import {FormsModule} from "@angular/forms";
import {AccountModule} from "./account/account.module";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    AccountModule,
  ],
  providers: [],
  exports: [
    AccountModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
