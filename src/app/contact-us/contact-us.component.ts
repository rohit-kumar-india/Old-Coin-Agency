import { Component, OnInit } from '@angular/core';
import { Details } from '../Details';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public title:any = Details.title;
  constructor() { }

  ngOnInit(): void {
  }

}
