import { Injectable } from '@angular/core';
import { MockContact } from './mock-item/contact_details';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[]= [];
  constructor() { 
    this.contacts= MockContact.contact_details;
  }

  saveDetails(contact : Contact){
    this.contacts.push(contact);
  }
}
