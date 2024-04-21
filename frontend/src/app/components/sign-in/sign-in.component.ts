import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router, RouterLink} from "@angular/router";

export interface User{
  username: string,
  password: string
}


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignINComponent {
  username: string;
  password: string;
  invalidData: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.password = "";
    this.username = "";
    this.invalidData = false;
  }

  login(){
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).subscribe(result => {
      localStorage.setItem('token', result.token);
      this.router.navigate(['../account']);
    })
  }
}
