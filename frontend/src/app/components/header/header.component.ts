import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {User} from "../../User";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  user: User = {
    id: 0,
    user: '',
    image: ''
  }
  constructor(public authService: AuthService, private userService: UserService) {
  }
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }

}
