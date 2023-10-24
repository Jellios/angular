import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import {Firestore, collectionData, collection, CollectionReference, DocumentReference, doc, docData,updateDoc, deleteDoc,addDoc} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  contacts: Contact[] = [
    {id: "0", lastName:'lastname', firstName: 'firstname', phoneNr:'01234546789'},
    {id: "1", lastName:'testContact2', firstName: 'firstname', phoneNr:'0987654321'}
  ];

  constructor(private db: Firestore) { }

  getContact(id: string): Observable<Contact> {
    return docData<Contact>(
      doc(this.db, '/Contacts/' + id) as DocumentReference<Contact>
    )
   } 


getAllContacts() : Observable<Contact[]> {
return collectionData<Contact>(
  collection(this.db,'Contacts') as CollectionReference<Contact>,
  {idField: 'id'}
);
}
  fillConstacts() {
  
  }

  deleteContact(id: string) {
   // this.contacts = this.contacts.filter(contact => contact.id !== id);
   const contactRef = doc(this.db,'Contacts/'+id) as DocumentReference<Contact>;
   return from(deleteDoc(contactRef));
  }

  updateContact(contact: Contact, id: string) {
   /* const index = this.contacts.findIndex(el => el.id === id);
    if(index != -1) {
      this.contacts[index] = {...contact, id: id};
    } */

    const contactRef = doc(this.db,'Contacts/' + id) as DocumentReference<Contact>;
    return from(updateDoc(contactRef,contact));
  }

  createContact(contact: Contact) {
  /*  const id = (Math.random()*10).toString(36);
    const newContact = {...contact, id: id};
    this.contacts.push(newContact); */
    const contactCollection =  collection(this.db,'Contacts');
    return from(addDoc(contactCollection,contact));
  }

}
