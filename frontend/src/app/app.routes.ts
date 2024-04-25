import { Routes, RouterModule  } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {HomeComponent} from "./components/home/home.component";
import {CarsComponent} from "./components/cars/cars.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {AccountComponent} from "./components/account/account.component";
import {CategoryComponent} from "./components/category/category.component";
import {DealersComponent} from "./components/dealers/dealers.component";
import {FavComponent} from "./components/fav/fav.component";
export const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', component: HomeComponent},
  {path: 'cars' , component: CarsComponent},
  {path: 'account' ,component: AccountComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'cars/:id ' , component: CarDetailsComponent},
  {path: 'dealers', component: DealersComponent},
  {path: 'fav', component: FavComponent}
];
