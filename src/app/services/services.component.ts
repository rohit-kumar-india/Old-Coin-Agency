import { Component, OnInit } from '@angular/core';
import { Details } from '../Details';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public title:any = Details.title;
  constructor() { }

  ngOnInit(): void {
  }

}
