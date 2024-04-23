import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {User} from "../../User";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  currentUser: User = {
    id: 0,
    user: '',
    image: ''
  }
}
