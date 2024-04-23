import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profileUrl = 'http://localhost:8000/profile/';

  private currentUser: User | null = null;
  constructor(private http:HttpClient, private authService: AuthService) { }

}
