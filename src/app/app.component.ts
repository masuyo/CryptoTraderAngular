import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs/internal/observable/interval';
import {startWith, switchMap} from 'rxjs/operators';
import { RestApiService } from './shared/rest-api.service';
import { timer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CryptoTrader';
  ngOnInit() {
    timer(0, 10000)
      .subscribe(() => console.log('polling'));
  }
}
