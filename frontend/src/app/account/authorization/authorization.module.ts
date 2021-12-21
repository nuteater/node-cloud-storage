import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ValidationMessageComponent} from "./validation-message.component";

@NgModule({
  declarations: [
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthorizationModule { }
