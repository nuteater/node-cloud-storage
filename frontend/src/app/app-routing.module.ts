import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthorizationComponent} from "./account/authorization/authorization.component";
import {RegistrationComponent} from "./account/registration/registration.component";


const childRoutes: Routes = [
  {
    path: 'account',
    children:[
      {path: 'authorization', component: AuthorizationComponent},
      {path: 'registration', component: RegistrationComponent},
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule, BrowserAnimationsModule]
})
export class AppRoutingModule { }
