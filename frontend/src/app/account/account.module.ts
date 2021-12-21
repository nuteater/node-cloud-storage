import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {RegistrationComponent} from "./registration/registration.component";
import {AuthorizationComponent} from "./authorization/authorization.component";

@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
  ],
  exports: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccountModule { }
