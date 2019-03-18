import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Currency } from '../shared/currency';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  Transactions: any = [];

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadTransactions()
  }

  loadTransactions() {
    return this.restApi.getHistory().subscribe((data: {}) => {
      this.Transactions = data;
    });
  }
}
