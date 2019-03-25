import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CurrencyHistory = [];
  CurrencyChart = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.restApi.getExchangeRate('btc');

  }



}
