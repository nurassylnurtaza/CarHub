import {Component, OnInit} from '@angular/core';
import {Car, Category} from "../../models";
import {User} from "../../User";
import {Router} from "@angular/router";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-add-cars',
  standalone: true,
  imports: [],
  templateUrl: './add-cars.component.html',
  styleUrl: './add-cars.component.css'
})
export class AddCarsComponent implements OnInit{
  car: Car = {
    id: 0,
    brand: '',
    model: '',
    year: 0,
    color: '',
    category:[],
    description: '',
    price: 0,
    image: '',
    liked: false,
    user:[]
  }
  categories: Category[] = [];
  constructor(private carService: CarService, private router: Router) {}

  selectedCategory: Category = {
    id: 0,
    name: ''
  };
  ngOnInit() {
    this.getCategories()
  }
  getCategories(): void {
    this.carService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Failed to get Categories: ', error);
      }
    );
  }
  onSubmit() {
    this.car.category = [this.selectedCategory];
    this.carService.addCar(this.car).subscribe(
      (response) => {
        console.log('Car added successfully: ', response);
        this.router.navigate(['/my-cars']);
      },
      error => {
        console.error('Failed to add cars: ', error);
      }
    )
  }


}
