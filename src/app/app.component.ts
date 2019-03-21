import {Component, OnInit} from '@angular/core';
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
