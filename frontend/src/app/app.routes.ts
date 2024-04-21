import { Routes, RouterModule  } from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {SignINComponent} from "./components/sign-in/sign-in.component";
import {SignUPComponent} from "./components/sign-up/sign-up.component";
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/signin', component: SignINComponent},
  {path: '/signup', component: SignUPComponent},
];
