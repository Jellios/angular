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

/*onSignup(form: NgForm)
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
}  */
form!: FormGroup;
//emailTaken: boolean = false;
ngOnInit(): void {
  
  this.form = this.fb.group({
    'email': [null],
    'passwd': [null],
    'passwd2': [null]
  });

  /*const emailControl = this.form.get('email')
   if (emailControl) {
    emailControl.valueChanges.subscribe(async (email) => {
      const res = await this.authService.isEmailTaken(email);
      if (res) {
        console.log('Email is already taken.');
        this.emailTaken = true
        console.log("taken");
        // You can also show a message to the user or mark the email field as invalid here
      }
      else
      {
        this.emailTaken = false;
      }
    });
}*/
} 


onSignup(): void {
  const email = this.form.value['email'];
  const password = this.form.value['passwd'];
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

