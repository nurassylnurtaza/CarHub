import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
export interface NewUser{
  first_name: string,
  last_name: string,
  username: string,
  number: string,
  password: string
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUPComponent {
  user: NewUser;
  passError: boolean;
  constructor(private authService: AuthService) {
    this.user = {first_name: "", last_name:"", username: "", number: "",password: ""};
    this.passError = false;
  }
  register(){
    console.log(this.user)
    this.authService.register(this.user);
  }
}
