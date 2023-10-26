import {Component , OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
constructor (private authService: AuthService,private router: Router, private fb: FormBuilder) {}


form!: FormGroup;
//emailTaken: boolean = false;
ngOnInit(): void {
  
  this.form = this.fb.group({
    'email': [null],
    'passwd': [null],
    'passwd2': [null]
  });

  
} 


onSignup(): void {
  const email = this.form.value['email'];
  const password = this.form.value['passwd'];
  this.authService.signup(email,password)
  .then((res)=> {
    if (res == 'success') {
      this.router.navigate(['auth/login']);
    }
    else {
      alert(res);
    }
  })
}

}

