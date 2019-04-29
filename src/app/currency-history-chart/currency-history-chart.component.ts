import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-currency-history-chart',
  templateUrl: './currency-history-chart.component.html',
  styleUrls: ['./currency-history-chart.component.css']
})
export class CurrencyHistoryChartComponent implements OnInit {

  @Input() labels = [];
  @Input() values = [];
  @Input() symbol = '';
  chart = [];

  constructor() { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.symbol,
            data: this.values,
            fill: false,
            backgroundColor: 'rgba(100, 159, 64, 0.2)',
            borderColor: 'rgba(100, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      }
    });
  }
}
