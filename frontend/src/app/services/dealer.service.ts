import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car, Dealer, DealerCar} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  BASE_URL = 'http://127.0.0.1:8000/dealers/';
  constructor(private client: HttpClient) { }
  getDealers(): Observable<Dealer[]>{
    return this.client.get<Dealer[]>(`${this.BASE_URL}`)
  }
  getDealer(id: number): Observable<Dealer> {
    return this.client.get<Dealer>(`${this.BASE_URL}${id}/`)
  }
  getDealerCars(id: number): Observable<DealerCar[]> {
    return this.client.get<DealerCar[]>(`${this.BASE_URL}/${id}/cars/`)
  }
}
