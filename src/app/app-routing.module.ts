import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RechargeWalletComponent } from './recharge-wallet/recharge-wallet.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { VendHelmetComponent } from './vend-helmet/vend-helmet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recharge-wallet', component: RechargeWalletComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },
  { path: 'vend', component: VendHelmetComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
