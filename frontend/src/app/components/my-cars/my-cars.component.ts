import {Component, OnInit} from '@angular/core';
import {Car} from "../../models";
import {CarService} from "../../services/car.service";
import {AuthService} from "../../services/auth.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-my-cars',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './my-cars.component.html',
  styleUrl: './my-cars.component.css'
})
export class MyCarsComponent implements OnInit{

  cars: Car[] = [];
  constructor(private carService: CarService, private authService: AuthService ) {
  }
  ngOnInit(): void {
    this.getMyCars();
  }
  getMyCars(): void{
  this.carService.getMyCars().subscribe(cars=>{
    this.cars = cars
  });
  }
  deleteCar(id: number | null): void {
    if (confirm("Вы уверены, что хотите удалить эту машину?") && id !== null) {
      this.carService.deleteCar(id).subscribe(() => {
        this.cars = this.cars.filter(car => car.id !== id);
      });
    }
  }
}
