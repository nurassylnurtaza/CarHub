import {Component, Input, input, OnInit} from '@angular/core';
import {Car} from "../../models";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  @Input()
  categoryID: number;
  Cars: Car[];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private carService: CarService, private router: Router) {
    this.categoryID = 0;
    this.Cars = [];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getCategoryCars()
      }
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      let _id = params.get('id');
      if (_id) {
        this.categoryID = +_id;
      }
    });
    this.getCategoryCars()
  }
  getCategoryCars(){
    this.categoryService.getCategoryCars(this.categoryID).subscribe((cars) => {
      this.Cars = cars;
    });
  }


  categoryIDtoString(){
    return this.categoryID.toString()
  }

}
