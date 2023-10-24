import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  form!: FormGroup;
  contact:Contact = new Contact();
  idFromRoute: string | null = null;

  constructor(private backendService: BackendService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'lastName': [null, {validators: Validators.required}],
      'firstName': [null],
      'phoneNr': [null, {validators: Validators.required}]
    });

    this.route.paramMap
    .subscribe((params) => {
      this.idFromRoute = params.get('id')? params.get('id') : null;
      if(this.idFromRoute) {
       /* this.contact = this.backendService.getContact(this.idFromRoute);
        this.form.setValue({
          lastName: this.contact.lastName,
          firstName: this.contact.firstName,
          phoneNr: this.contact.phoneNr}); */
          this.backendService.getContact(this.idFromRoute)
          .subscribe(contact => {
            console.log(contact);
            
            this.contact = contact;
            this.form.setValue({
              lastName: this.contact.lastName,
              firstName: this.contact.firstName,
              phoneNr: this.contact.phoneNr});
          });
        
      }
      else {
        this.form.setValue({
          lastName: this.contact.lastName,
          firstName: this.contact.firstName,
          phoneNr: this.contact.phoneNr});
      }
    });
  }

  get lastName() {
    return this.form.controls['lastName'];
  }

  get phoneNr() {
    return this.form.controls['phoneNr'];
  }

  onDefault(): void {
    this.form.setValue({
      'lastName': 'default name',
      'firstName': 'default firstname',
      'phoneNr': '0123456789',
    });
  }

  onCancel(): void {
    if(this.idFromRoute) {
      this.router.navigate(["/contacts", this.idFromRoute]);
    } else {
      this.router.navigate(["/contacts"]);
    }
  }

  onSubmit(): void {
    const newContact = {...this.form.value} as Contact;
    if(this.idFromRoute) {
      this.backendService.updateContact(newContact, this.idFromRoute);
      this.router.navigate(["/contacts", this.idFromRoute]);
    } else {
      this.backendService.createContact(newContact);
      this.router.navigate(["/contacts"]);
    }

  }

}
