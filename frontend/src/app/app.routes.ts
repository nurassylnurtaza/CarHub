import { Routes, RouterModule  } from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {SignINComponent} from "./components/sign-in/sign-in.component";
import {SignUPComponent} from "./components/sign-up/sign-up.component";
export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SignINComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'signup', component: SignUPComponent},
];
