import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Details } from '../Details';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  submitted=false;
  phone = Details.phone;
  email = Details.email;
  address = Details.address;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: any,form : NgForm){
    console.warn(data);
    this.http.post(Details.formspree_url,data)
    .subscribe((result)=>{
      this.submitted=true;
      console.warn("result",result)
      form.reset();
    })
    console.log(data);
  }
}
