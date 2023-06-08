import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!:string;
  username!:string;
  password!:string
  constructor(private http: HttpClient) {}

  register(){
    const userData = {
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.http.post('/api/signup',userData).subscribe(
      (response) => {

        console.log('Registered successfully!', response);
      },
      (error) => {

        console.error('Registration failed!', error);
      }
    );
  }
}
