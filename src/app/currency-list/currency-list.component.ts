import {Component, Input, OnInit} from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {Currency} from '../shared/currency';
import {Balance} from '../shared/balance';
import {interval, Subject} from 'rxjs';
import {flatMap, startWith, merge} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  Currencies: Currency[] = [];
  Symbols: any = ['BTC', 'XRP', 'ETH'];
  TransactionTypes: any = ['Vétel', 'Eladás'];
  Balance: Balance;
  onClickRefresh = new Subject();
  subscriber;

  transactionType = { type: 'Vétel' };
  currencyDetails = { symbol: '', amount: ''}

  constructor(
    public restApi: RestApiService,
    public router: Router
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

  doTransaction() {
    switch (this.transactionType.type) {
      case this.TransactionTypes[0]:
        this.restApi.purchase(this.currencyDetails).subscribe();
        break;
      case this.TransactionTypes[1]:
        this.restApi.sell(this.currencyDetails).subscribe();
        break;
      default:
        break;
    }
    this.doClickRefresh();
  }

  doClickRefresh() {
    this.onClickRefresh.next('');
  }

  clearCurrencies() {
    this.Currencies = [];
  }

}
