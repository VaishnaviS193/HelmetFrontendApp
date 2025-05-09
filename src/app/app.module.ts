import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Import this
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';


import { RechargeWalletComponent } from './recharge-wallet/recharge-wallet.component';
import { HeaderComponent } from './header/header.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    LandingComponentComponent,
    HomeComponent,
    RechargeWalletComponent,
    HeaderComponent,
    EditProfileComponent,
    TransactionHistoryComponent, 
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
