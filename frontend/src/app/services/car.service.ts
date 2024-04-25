import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car, Category} from "../models";
import {AuthService} from "./auth.service";
import {Observable, of} from "rxjs";
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "http://localhost:8000/cars/";

  constructor ( private http: HttpClient, private authService: AuthService) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category/`);
  }
  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}cars`);
  }
  getCarsByCategory(categoryId: number): Observable<Car[]> {

    // const url = 'http://localhost:8000/category/?category=${categoryId}'
    return this.http.get<Car[]>(`${this.apiUrl}/category/${categoryId}`);
    // return this.http.get<Recipe[]>(url, {headers});
  }
  getCarsById(id: number): Observable<Car> {
    const url = `${this.apiUrl}/${id}/`;
    return this.http.get<Car>(url);
  }
  getFavoriteCarsOfUser(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}favorites/`)
  }
  likeAction(car: Car){
    this.http.post(`${this.apiUrl}favorites/`, {car: car.id}).subscribe(resp=>{
    }, error => {
    })
  }

  getMyCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}my`);
  }
  deleteCar(id: number | null): Observable<Car> {

    if(id == null)
      return of();

    const url = `${this.apiUrl}my${id}`;
    return this.http.delete<Car>(url);
  }
  addCar(car: Car) {
    const payload = {
      brand: car.brand,
      model: car.model,
      categories: car.category,
      description: car.description,
      year: car.year,
      color: car.color,
      price: car.price,
      image: car.image,
      liked: car.liked,
      user: car.user
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    return this.http.post<Car>(`${this.apiUrl}/cars/`, JSON.stringify(payload), {
      headers,
      reportProgress: true,
      observe: 'events'
    });
}
}
