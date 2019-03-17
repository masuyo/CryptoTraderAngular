import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBuyComponent } from './currency-buy.component';

describe('CurrencyBuyComponent', () => {
  let component: CurrencyBuyComponent;
  let fixture: ComponentFixture<CurrencyBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
