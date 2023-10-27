import {Component , OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, Form } from '@angular/forms';
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
 /* 
  this.form = this.fb.group({
    'email': [null],
    'passwd': [null],
    'passwd2': ["", {
      validators: [Validators.required],
      //asyncValidators: [this.authService.paswordsMatch(this.passwd, this.passwd2)],
      updateOn: 'change'
    }],
  }); */
  this.form = this.fb.group({
    'email': [null],
    'passwordData': this.fb.group({
      'passwd': [null],
      'passwd2': ["", {
        validators: [Validators.required],
        updateOn: 'change'
    }],
    }, {
      asyncValidators: [this.authService.paswordsMatch],
    })
  });

  
} 
get passwd(): FormArray {
  return this.form.controls['passwd'] as FormArray;
}
get passwd2(): FormArray {
  return this.form.controls['passwd2'] as FormArray;
}
get passwordData (): FormGroup {
  return this.form.controls["passwordData"] as FormGroup;
}
onSignup(): void {
  const email = this.form.value['email'];
  //const password = this.form.value['passwd'];
  const password = this.passwordData.value['passwd'];
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

