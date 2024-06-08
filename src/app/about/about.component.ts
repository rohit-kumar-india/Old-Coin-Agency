import { Component, OnInit } from '@angular/core';
import { Details } from '../Details';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:any = Details.title;
  constructor() { }

  ngOnInit(): void {
  }

}
