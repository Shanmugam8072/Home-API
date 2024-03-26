import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Inter } from '../Inter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  inter: Inter = {
    username: '',
    email: '',
    password: ''
  };
  errorMessage!: string;

  constructor(private user: UserService) { }

  register() {
    this.user.register(this.inter).subscribe(
      response => {
        // Handle successful registration
        alert('Registration successful');
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
