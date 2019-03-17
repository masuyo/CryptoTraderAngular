import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Currency } from '../shared/currency';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  Currencies: any = [];

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadCurrencies()
  }

  loadCurrencies() {
    this.restApi.getExchangeRate("btc").subscribe((data: {}) => {
      this.Currencies.push(data);
    })
    this.restApi.getExchangeRate("xrp").subscribe((data: {}) => {
      this.Currencies.push(data);
    })
    this.restApi.getExchangeRate("eth").subscribe((data: {}) => {
      this.Currencies.push(data);
    })
  }
}
