import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currency } from '../shared/currency';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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

  getExchangeRate(currencyName: string): Observable<Currency> {
    return this.http.get<Currency>(this.apiURL + '/exchange/' + currencyName)
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
