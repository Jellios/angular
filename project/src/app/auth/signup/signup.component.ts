import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor (private authService: AuthService,private router: Router) {}

onSignup(form: NgForm)
{
  const email = form.value.email;
  const password = form.value.passwd;
  this.authService.signup(email,password)
  .then((res)=> {
    if (res == 'success') {
      this.router.navigate(['login']);
    }
    else {
      alert(res);
    }
  })
}
}
