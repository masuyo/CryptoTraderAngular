import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySellComponent } from './currency-sell.component';

describe('CurrencySellComponent', () => {
  let component: CurrencySellComponent;
  let fixture: ComponentFixture<CurrencySellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
