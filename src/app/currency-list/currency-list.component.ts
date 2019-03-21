import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {Currency} from '../shared/currency';
import {Balance} from '../shared/balance';
import {interval, Subject} from 'rxjs';
import {flatMap, startWith, merge} from 'rxjs/operators';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  Currencies: Currency[] = [];
  Symbols: any = ['btc', 'xrp', 'eth'];
  Balance: Balance;
  onClickRefresh = new Subject();
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
    interval(10000)
      .pipe(
        merge(this.onClickRefresh),
        startWith(0),
        flatMap(() => this.restApi.getBalance())
      )
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

  buyClick(symbol, amount) {
    this.restApi.purchase(symbol, amount);
    this.doClickRefresh();
  }

  sellClick(symbol, amount) {
    this.restApi.sell(symbol, amount);
    this.doClickRefresh();
  }

  doClickRefresh() {
    this.onClickRefresh.next('');
  }

  clearCurrencies() {
    this.Currencies = [];
  }

}
