import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username = '';
  password = '';

  router: Router;

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  constructor(private authService: AuthService, router: Router) {
    this.router = router;
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.navigateTo('/');
      },
      (error) => {
        console.error('Error logging in:', error)
      }
    )
  }
}
