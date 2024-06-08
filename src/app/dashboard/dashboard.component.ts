import { Component, OnInit } from '@angular/core';
import { Details } from '../Details';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = Details.title;
  phone = Details.phone;
  whatsapp = Details.whatsapp;
  public coins:any[]=[
    {"pic":"Jawahar Lal Nehru Coin","name":"Jawahar Lal Nehru Coin","price":"Rs.70,000/-"},
    {"pic":"50 Paisa 1942 H mintmark","name":"50 Paisa 1942 H mintmark Coin","price":"Rs.80,000/-"},
    {"pic":"One Rupee 1942 H mintmark","name":"One Rupee 1942 H mintmark","price":"Rs.80,500/-"},
    {"pic":"One Rupee 1945 H mintmark","name":"One Rupee 1945 H mintmark","price":"Rs.70,000/-"},
    {"pic":"One Rupee 1951 H mintmark","name":"One Rupee 1951 H mintmark","price":"Rs.60,000/-"},
    {"pic":"One Rupee 1999 H mintmark","name":"One Rupee 1999 H mintmark","price":"Rs.60,000/-"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
