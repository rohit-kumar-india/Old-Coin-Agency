import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Details } from './Details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted=false;
  title = Details.title;
  phone = Details.phone;
  whatsapp = Details.whatsapp;

  constructor(private http:HttpClient) { }

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
