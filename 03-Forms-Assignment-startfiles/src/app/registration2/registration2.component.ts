import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class User {
  constructor(
    public fullName = {
      name: '',
      firstName: ''
    },
    public gender:string = '',
    public dateOfBirth:string = '',
    public email:string= '',
    public payment= '0'
  ) {}
}

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})

export class Registration2Component implements OnInit {

  form!: FormGroup;
  genders = ['male', 'female'];
  paymentOptions = ['Visa', 'MasterCard', 'Bancontact'];
  defaultPayment = '0';
  defaultUser = new User({
    name: 'Last name',firstName: 'First name'},
    'male', 
    '1970-01-01',
    'Lastname.Firstname@student.thomasmore.be',
    '0' 
    );
  user = new User();
  payment = '';
  submitted = false;
  constructor (private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      'fullName' : this.fb.group({
        'name': [null, {
          validators: [Validators.required]
        }],
        'firstName': [null, {
          validators: [Validators.required]
        }]
      }),
      'dateOfBirth': [null, {
        validators: [Validators.required]
      }],
      'email': [null, {
        validators: [Validators.email, Validators.required]
      }],
      'gender': ['male', {
        validators: [Validators.required]
      }],
      'payment': [0, {
        validators: [Validators.required]
      }]
    });
  }
  onSubmit(): void {
    console.log(this.form);
  }
}
