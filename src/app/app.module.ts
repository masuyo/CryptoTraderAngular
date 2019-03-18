import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    TradeHistoryComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
