import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {interval} from 'rxjs';
import {flatMap, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  EthLabels = [];
  EthValues = [];
  BtcLabels = [];
  BtcValues = [];
  XrpLabels = [];
  XrpValues = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadHistory('eth');
  }

  loadHistory(symbol) {
  }
}
