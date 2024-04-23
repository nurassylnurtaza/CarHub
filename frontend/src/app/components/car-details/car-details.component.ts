import {Component, OnInit} from '@angular/core';
import {Car} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  car: Car;
  car_id: number;
  constructor(private route: ActivatedRoute, private carService: CarService) {
    this.car_id = 0;
    this.car =
      {id: 0,
        model: 'null',
        brand: 'null',
        description:'null',
        year: 0,
        color: 'null',
        category: 0,
        price:0,
        imgURL: 'null',
        liked: false
      };
  };

}
