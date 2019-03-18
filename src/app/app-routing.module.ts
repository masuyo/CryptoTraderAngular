import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'currencies-list'},
  { path: 'currencies-list', component: CurrencyListComponent },
  { path: 'history', component: TradeHistoryComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
