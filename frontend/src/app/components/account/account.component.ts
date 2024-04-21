import {Component, OnInit} from '@angular/core';
import {Car} from "../../models";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

export interface User{
  first_name: string,
  last_name: string,
  username: string,
}
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})

export class AccountComponent implements OnInit{
  Authorized: boolean;
  cars: Car[];
  user: User;
  constructor(private router: Router, private authService: AuthService) {
    this.Authorized = false;
    this.cars = [];
    this.user = {username: "", first_name: "", last_name: ""};
  }
  ngOnInit() {
    this.getUser();
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['../signin'])
  }

  getUser(){
    this.authService.getUser().subscribe((user) => {
      this.user = {
        first_name: user['first_name'],
        last_name: user['last_name'],
        username: user['username']
      };
      console.log(this.user)
    });
  }
}
