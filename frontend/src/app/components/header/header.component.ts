import {Component, OnInit} from '@angular/core';
import {User} from "../../models";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

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
export class HeaderComponent {

}
