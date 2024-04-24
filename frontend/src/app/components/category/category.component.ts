import {Component, Input, input, OnInit} from '@angular/core';
import {Car} from "../../models";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CarService} from "../../services/car.service";
import {NgForOf} from "@angular/common";
import {Cars} from "../../fake_db";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  Cars: Car[] = [
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
    }
  ];


constructor(private carService: CarService, private route: ActivatedRoute) { }
  categoryId: number = 0;
  // ngOnInit() {
  //   const categoryIdString = this.route.snapshot.paramMap.get('id');
  //   this.categoryId = categoryIdString ? + categoryIdString : 0;
  //   this.getCarsForCategory();
  // }
  // getCarsForCategory(): void{
  //   this.carService.getCarsByCategory(this.categoryId).subscribe(
  //     cars => {
  //       this.cars = cars;
  //     },
  //     error => {
  //       console.error('Failed to get Cars: ', error);
  //     }
  //   )
  // }
}
