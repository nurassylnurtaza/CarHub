import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username = '';
  password = '';
}
