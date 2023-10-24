import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { BackendService } from '../backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  contact: Contact = new Contact();
  
  
  id: string = "";

  constructor(private backendService: BackendService, private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.route.params
        .subscribe((params) => {
          
          this.id = params['id'];
          console.log(this.id);
          this.backendService.getContact(this.id)
          .subscribe(contact => {
            console.log(contact);
            this.contact = contact;
            console.log(this.contact.lastName); 
          })
        });
    }

    editContact() {
      this.router.navigate(['contacts', this.id, 'edit']);
    }

    deleteContact(): void {
      this.backendService.deleteContact(this.id);
      this.router.navigate(['contacts']);
    }
}
