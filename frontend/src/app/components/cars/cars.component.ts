import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Car, Category} from "../../models";
import {CarService} from "../../services/car.service";
import {Router, RouterLink} from "@angular/router";
import {User} from "../../User";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  cars: Car[] = [];
  categories: Category[] = [];

  constructor(private carService: CarService, private route: Router) {
    this.router = route;
  }

  ngOnInit() {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
    this.getCategories()
  }

  getCategories() {
    this.carService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Failed to get categories: ', error);
      }
    )
  }
  router: Router;
  onCategoryClick(categoryId: number): void {
    this.router.navigate(['/categories', categoryId]);
  }
  getAllCars(): void {
    this.carService.getAllCars().subscribe(
      (recipes: Car[]) => {
        this.cars = recipes;
      },
      error => {
        console.error('Failed to get all cars: ', error);
      }
    )
  }


}
