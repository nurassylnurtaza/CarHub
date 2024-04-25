import {Component, Input, input, OnInit} from '@angular/core';
import {Car} from "../../models";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CarService} from "../../services/car.service";
import {NgForOf} from "@angular/common";
import {Category} from "../../models";
import { User } from '../../User';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  Cars: Car[] = [ ];


constructor(private carService: CarService, private route: ActivatedRoute) { }
  categoryId: number = 0;
  ngOnInit() {
    const categoryIdString = this.route.snapshot.paramMap.get('id');
    this.categoryId = categoryIdString ? + categoryIdString : 0;
    this.getCarsForCategory();
  }
  getCarsForCategory(): void{
    this.carService.getCarsByCategory(this.categoryId).subscribe(
      cars => {
        this.Cars = cars;
      },
      error => {
        console.error('Failed to get Cars: ', error);
      }
    )
  }
}
