import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Car, Category} from "../../models";
import {User} from "../../User";
import {CarService} from "../../services/car.service";

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
export class FavComponent implements OnInit{
  Category!: Category;
  User!: User;
  cars: Car[] = [];
  constructor(private carService: CarService){
    this.cars = [];
  }
  like(car: Car): void{
    car.liked = !car.liked
    this.carService.likeAction(car);
  }
  ngOnInit(): void {
    this.getFavoriteCars()
  }
  getFavoriteCars(){
    this.carService.getFavoriteCarsOfUser().subscribe((cars) => {
      this.cars = cars;
      console.log(this.cars)
    });
  }

}
