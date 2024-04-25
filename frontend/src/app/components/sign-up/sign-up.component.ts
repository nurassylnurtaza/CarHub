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

  router: Router;
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  constructor(private registrationService: RegisterService, router: Router) {
    this.router = router;
  }

  onSubmit() {
    this.registrationService.registerUser(this.username, this.password).subscribe(
      (response) => {
        this.navigateTo('/sign-in');
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
