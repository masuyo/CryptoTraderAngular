import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHistoryChartComponent } from './currency-history-chart.component';

describe('CurrencyHistoryChartComponent', () => {
  let component: CurrencyHistoryChartComponent;
  let fixture: ComponentFixture<CurrencyHistoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyHistoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
