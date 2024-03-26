import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Inter } from '../Inter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  inter: Inter = {
    username: '',
    password: '',
    email: ''
  };
  errorMessage!: string;

  constructor(private user: UserService) { }

  login() {
    this.user.login(this.inter).subscribe(
      response => {
        // Handle successful login
        alert('Login successful');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}

