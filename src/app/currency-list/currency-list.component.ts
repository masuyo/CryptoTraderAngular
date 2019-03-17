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
  symbols: any = ["btc", "xrp", "eth"];

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadCurrencies()
  }

  loadCurrencies() {
    this.symbols.forEach(symbol => {
      this.pushCurrencyBySymbol(symbol);
    });
  }

  pushCurrencyBySymbol(symbol) {
    this.restApi.getExchangeRate(symbol).subscribe((data: {}) => {
      this.Currencies.push(data);
    })
  }
}
