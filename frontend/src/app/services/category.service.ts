import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car, Category} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = "http://127.0.0.1:8000"
  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`${this.BASE_URL}/categories`)
  }
  getCategoryCars(categoryID: number): Observable<Car[]>{
    return this.client.get<Car[]>(`${this.BASE_URL}/categories/${categoryID}/cars`)
  }
}
