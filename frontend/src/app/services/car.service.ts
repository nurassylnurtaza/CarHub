import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  BASE_URL = "http://127.0.0.1:8000"
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'JWT ' + localStorage.getItem('token')
    })
  };
  constructor(private client: HttpClient) { }
  likeAction(car: Car){
    this.client.post(`${this.BASE_URL}/likes/`, {car: car.id}, this.httpOptions).subscribe(resp=>{
    }, error => {
    })
  }
}
