import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Car, Category} from "../../models";
import {User} from "../../User";

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  Category!: Category;
  User!: User;
  cars: Car[] = [
    {
      id:  1,
      model: `model ${1}`,
      brand:`brand ${ 1}`,
      year: 1952,
      color: 'black',
      category: this.Category,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequatur, eaque',
      price: 150000,
      imgURL: '',
      liked: true,
      user: this.User
    },
  ];
  like(car: Car): void{
    car.liked = !car.liked
  }

}
