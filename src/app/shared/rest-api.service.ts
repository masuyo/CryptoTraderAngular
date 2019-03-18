import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currency } from '../shared/currency';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'https://obudai-api.azurewebsites.net/api';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'X-Access-Token': '3D2ADF61-84D2-42A2-A715-A207B67A8CD8'
    })
  }

  getExchangeRate(currencyName): Observable<Currency> {
    return this.http.get<Currency>(this.apiURL + '/exchange/' + currencyName, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getBalance(): Observable<number> {
    return this.http.get<number>(this.apiURL + '/account', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getHistory(): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiURL + '/account/history', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  purchase(currency, rate): Observable<Currency> {
    return this.http.post<Currency>(this.apiURL + '/account/purchase', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  reset() {
    var data = JSON.stringify(false);
    return this.http.post(this.apiURL + '/account/reset', data, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }
}
