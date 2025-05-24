import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Import this
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register-component/register-component.component';

import { LandingComponentComponent } from './landing-component/landing-component.component';


import { RechargeWalletComponent } from './recharge-wallet/recharge-wallet.component';
import { HeaderComponent } from './header/header.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendHelmetComponent } from './vend-helmet/vend-helmet.component';
import { ReturnComponentComponent } from './return-component/return-component.component';
import { VendPopupComponent } from './vend-popup/vend-popup.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponentComponent,
    HomeComponent,
    RechargeWalletComponent,
    HeaderComponent,
    EditProfileComponent,
    TransactionHistoryComponent,
    ReturnComponentComponent,
    ReturnComponentComponent,
    VendHelmetComponent,
    VendPopupComponent,  
    // ✅ Add this component here
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // ✅ Replace provideAnimationsAsync() with this
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
