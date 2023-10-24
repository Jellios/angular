import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

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

  @ViewChild('f') form!: NgForm;

  constructor() { }

  onSubmit(): void {
    console.log(this.form);
    this.submitted = true;
    this.user = this.form.value;
    this.payment = this.paymentOptions[+this.user.payment];
    this.form.reset({payment: '0'});
  }

  loadDefaultUser(): void {
    this.form.setValue(this.defaultUser);
  }

}
