import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
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
  Symbols: CurrencyTypes[] = [CurrencyTypes.BTC, CurrencyTypes.ETH, CurrencyTypes.XRP];
  TransactionTypes: TransactionType[] = [TransactionType.Purchase, TransactionType.Sell];
  Balance: Balance;
  onClickRefresh = new Subject();
  subscriber;

  transactionType = TransactionType.Purchase;
  currencyDetails = { symbol: '', amount: ''};

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
      this.pushCurrencyBySymbol(symbol.toLowerCase());
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
    switch (this.transactionType) {
      case TransactionType.Purchase:
        this.restApi.purchase(this.currencyDetails).subscribe();
        break;
      case TransactionType.Sell:
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

export enum TransactionType {
  Purchase = 'Vétel',
  Sell = 'Eladás',
}

export enum CurrencyTypes {
  BTC = 'BTC',
  XRP = 'XRP',
  ETH = 'ETH',
}
