import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string
  password: string

  constructor(private router: Router){
    this.username = ''
    this.password = ''
  }

  onSubmit(): void {

    // Update this to not use hardcoded UN & PW
    if (this.username == 'admin' && this.password == 'password') {
      this.router.navigate(['/products']);
    } else {
      // UN & PW was incorrect.
      console.log('UN or PW was incorrect.');
    }
  }
}
