import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-currency-history-chart',
  templateUrl: './currency-history-chart.component.html',
  styleUrls: ['./currency-history-chart.component.css']
})
export class CurrencyHistoryChartComponent implements OnInit {

  @Input() currencyHistory = [];

  constructor() { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    const chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: history,
        datasets: [
          {
            data: history,
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
