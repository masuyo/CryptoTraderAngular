import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { CurrencyBuyComponent } from './currency-buy/currency-buy.component';
import { CurrencySellComponent } from './currency-sell/currency-sell.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyBuyComponent,
    CurrencySellComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
