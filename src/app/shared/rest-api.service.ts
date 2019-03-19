import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currency } from '../shared/currency';
import { Balance } from '../shared/balance';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'https://obudai-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Access-Token': '3D2ADF61-84D2-42A2-A715-A207B67A8CD8'
    })
  }

  getExchangeRate(symbol): Observable<Currency> {
    return this.http.get<Currency>(this.apiURL + '/exchange/' + symbol, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(this.apiURL + '/account', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getHistory(): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiURL + '/account/history', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  purchase(symbol, amount) {
    const data = JSON.stringify({
      'symbol': symbol,
      'amount': amount
    });

    return this.http.post<Currency>(this.apiURL + '/account/purchase', data, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  sell(symbol, amount) {
    const data = JSON.stringify({
      'symbol': symbol,
      'amount': amount
    });

    return this.http.post<Currency>(this.apiURL + '/account/sell', data, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  reset() {
    const data = JSON.stringify(false);
    return this.http.post(this.apiURL + '/account/reset', data, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }
}
