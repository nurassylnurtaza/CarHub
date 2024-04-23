import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  carData: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchCarData();
  }

  fetchCarData() {
    // Function to fetch car data from the API
    this.http.get<any[]>('http://127.0.0.1:8000/api/cars/').subscribe(
      (data) => {
        this.carData = data; // Assign the fetched data to the carData variable
      },
      (error) => {
        console.error('Error fetching car data:', error); // Log error if fetching data fails
      }
    );
  }
}
