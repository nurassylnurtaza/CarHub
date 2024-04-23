import { Component } from '@angular/core';
import {User} from "../../models";
import {HttpClient} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";

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
  user: User;
  constructor(private http: HttpClient) {
    this.user = {
      id: 0,
      name: 'null',
    }
  }
}
