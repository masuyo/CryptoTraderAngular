import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  Currencies: any = [];
  Symbols: any = ['btc', 'xrp', 'eth'];
  Balance: any;

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadCurrencies();
    this.loadBalance();
  }

  loadCurrencies() {
    this.Symbols.forEach(symbol => {
      this.pushCurrencyBySymbol(symbol);
    });
  }

  loadBalance() {
    return this.restApi.getBalance().subscribe((data: {}) => {
      this.Balance = data;
    });
  }

  pushCurrencyBySymbol(symbol) {
    this.restApi.getExchangeRate(symbol).subscribe((data: {}) => {
      this.Currencies.push(data);
    });
  }

  buy(symbol, amount) {
    this.restApi.purchase(symbol, amount);
  }

  sell(symbol, amount) {
    this.restApi.sell(symbol, amount);
  }
}
