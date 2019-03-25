import { Component, OnInit } from '@angular/core';
import {Balance} from '../shared/balance';
import {Subject} from 'rxjs';
import {RestApiService} from '../shared/rest-api.service';
import {Router} from '@angular/router';
import {CurrencyTypes, TransactionType} from '../currency-list/currency-list.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  Symbols: CurrencyTypes[] = [CurrencyTypes.BTC, CurrencyTypes.ETH, CurrencyTypes.XRP];
  TransactionTypes: TransactionType[] = [TransactionType.Purchase, TransactionType.Sell];
  onClickRefresh = new Subject();
  subscriber;

  transactionType = TransactionType.Purchase;
  currencyDetails = { symbol: '', amount: ''};

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit() {
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
}
