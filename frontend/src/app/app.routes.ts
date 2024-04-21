import { Routes, RouterModule  } from '@angular/router';
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
