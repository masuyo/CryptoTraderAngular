import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyBuyComponent } from './currency-buy/currency-buy.component';
import { CurrencySellComponent } from './currency-sell/currency-sell.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'currency-list'},
  { path: 'list-currencies', component: CurrencyListComponent },
  { path: 'buy-currency', component: CurrencyBuyComponent },
  { path: 'list-currencies', component: CurrencySellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
