import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {Currency} from '../shared/currency';
import {Balance} from '../shared/balance';
import {interval} from 'rxjs';
import {flatMap, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  Currencies: Currency[] = [];
  Symbols: any = ['btc', 'xrp', 'eth'];
  Balance: Balance;
  subscriber;

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
    this.loadCurrencies();
    this.loadBalance();
  }

  loadCurrencies() {
    this.clearCurrencies();
    this.Symbols.forEach(symbol => {
      this.pushCurrencyBySymbol(symbol);
    });
    return null;
  }

  loadBalance() {
    return this.restApi.getBalance()
      .subscribe(balance => this.Balance = balance);
  }

  pushCurrencyBySymbol(symbol) {
    interval(10000)
      .pipe(
        startWith(0),
        flatMap(() => this.restApi.getExchangeRate(symbol))
      )
      .subscribe(currency => this.Currencies.push(currency));
  }

  buy(symbol, amount) {
    this.restApi.purchase(symbol, amount);
  }

  sell(symbol, amount) {
    this.restApi.sell(symbol, amount);
  }

  clearCurrencies() {
    this.Currencies = [];
  }

}
