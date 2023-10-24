import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Contact } from '../contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  contactSubscription!: Subscription;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
    this.contacts = [];
    this.onGetContacts();
    

  }
  onGetContacts():void {
    this.contactSubscription =  this.backendService.getAllContacts().subscribe(contacts => {
      console.log(contacts);
      this.contacts = contacts;

    });
    
  }
}
