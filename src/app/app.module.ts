import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    LandingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
