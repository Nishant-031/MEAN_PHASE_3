import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactFormSubmitted : boolean= false;
  contact: Contact = new Contact();
  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

  saveDetails(contact: Contact){
    this.contactService.saveDetails(contact);
    this.contactFormSubmitted= true;
  }

}
