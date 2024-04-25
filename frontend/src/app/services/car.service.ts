import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car, Category} from "../models";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "http://localhost:8000/home";

  constructor ( private http: HttpClient, private authService: AuthService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  getCars(): Observable<Car[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<Car[]>(`${this.apiUrl}/cars/`, {headers});
  }
  getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<Category[]>(`${this.apiUrl}/category/`, {headers});
  }
  getAllCars(): Observable<Car[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<Car[]>(`${this.apiUrl}/cars/`, {headers});
  }
  getCarsByCategory(categoryId: number): Observable<Car[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });
    // const url = 'http://localhost:8000/category/?category=${categoryId}'
    return this.http.get<Car[]>(`${this.apiUrl}/category/${categoryId}`, {headers});
    // return this.http.get<Recipe[]>(url, {headers});
  }
  getCarsById(id: number): Observable<Car> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    const url = `${this.apiUrl}/cars/${id}/`;
    return this.http.get<Car>(url, { headers });
  }
  getFavoriteCarsOfUser(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}/favorites/`, this.httpOptions)
  }
  likeAction(car: Car){
    this.http.post(`${this.apiUrl}/favorites/`, {car: car.id}, this.httpOptions).subscribe(resp=>{
    }, error => {
    })
  }

  getMyRecipes(): Observable<Recipe[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<Recipe[]>(`${this.apiUrl}/my-recipes/`, {headers});
  }

}
