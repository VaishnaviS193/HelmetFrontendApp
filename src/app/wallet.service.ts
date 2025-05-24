// src/app/services/wallet.service.ts

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:8080/api/wallets';  // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  rechargeWallet(phoneNumber: string, amount: number): Observable<string> {
    const params = new HttpParams()
      .set('phoneNumber', phoneNumber)
      .set('amount', amount.toString());

    return this.http.post(this.apiUrl + '/recharge', null, { params, responseType: 'text' });
  }

  getBalance(userId: number): Observable<number> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<number>(this.apiUrl + '/balance', { params });
  }
}
