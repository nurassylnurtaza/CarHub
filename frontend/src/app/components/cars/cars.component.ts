import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {Car, Category} from "../../models";
import {CarService} from "../../services/car.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars: Car[] = [
    {
      id:  1,
      model: `model ${1}`,
      brand:`brand ${ 1}`,
      year: 1952,
      color: 'black',
      category: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequatur, eaque',
      price: 150000,
      imgURL: '',
      liked: true
    },
  ];
  categories: Category[] = []

  constructor(private carService: CarService, private route: Router) {
  }
  //
  // ngOnInit() {
  //   this.carService.getCars().subscribe((cars) => {
  //     this.cars = cars;
  //   });
  //   this.getCategories()
  // }
  //
  // getCategories() {
  //   this.carService.getCategories().subscribe(
  //     (categories: Category[]) => {
  //       this.categories = categories;
  //     },
  //     error => {
  //       console.error('Failed to get categories: ', error);
  //     }
  //   )
  // }
  //
  // onCategoryClick(categoryId: number): void {
  //   this.route.navigate(['/category', categoryId]);
  // }
  // getAllCars(): void {
  //   this.carService.getAllCars().subscribe(
  //     (recipes: Car[]) => {
  //       this.cars = recipes;
  //     },
  //     error => {
  //       console.error('Failed to get all recipes: ', error);
  //     }
  //   )
  // }
}
