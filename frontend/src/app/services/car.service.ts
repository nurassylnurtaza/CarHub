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

    return this.http.get<Category[]>(`${this.apiUrl}/categories/`, {headers});
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
}
