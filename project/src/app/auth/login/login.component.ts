import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }
  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.passwd;
    this.authService.login(email,password)
    .then((response) => {
      if (!response)
      {
        this.invalidLogin = true;
      }
      else
      {
        this.invalidLogin = false;
        //router navigation hier on successfull login
        console.log("logged in successfully");
      }
    })
  }
}
