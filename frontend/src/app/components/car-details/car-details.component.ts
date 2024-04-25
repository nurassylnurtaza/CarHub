import {Component, OnInit} from '@angular/core';
import {Car, Category} from "../../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CarService} from "../../services/car.service";
import {NgIf} from "@angular/common";
import { User } from '../../User';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  car!: Car;
  constructor(private route: ActivatedRoute, private carService: CarService) {
  }
  like(car: Car): void{
    car.liked = !car.liked
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarsById(id).subscribe((car) => {
      this.car = car;
    });

  }


}
