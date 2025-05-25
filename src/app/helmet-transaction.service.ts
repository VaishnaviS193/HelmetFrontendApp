import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface VendResponse {
  code: number; // unlock code from backend
}

@Injectable({
  providedIn: 'root'
})
export class HelmetTransactionService {

  private helmetBaseUrl = 'http://localhost:8080/api/helmets';
  private transactionBaseUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {}

  // Step 1: Vend helmet → backend generates unlock code and sends to ESP32 and frontend
  vendHelmet(userId: number, helmetId: number, location: string): Observable<VendResponse> {
    const payload = { userId, helmetId, location };
    return this.http.post<VendResponse>(`${this.helmetBaseUrl}/vend`, payload);
  }

  // Step 2: Start transaction (user inputs code to unlock helmet)
  startTransaction(code: string): Observable<string> {
    const params = new HttpParams().set('code', code);
    return this.http.post(`${this.transactionBaseUrl}/start`, null, { params, responseType: 'text' });
  }

  // Step 3: Return helmet (user returns helmet using the same code)
  returnHelmet(code: string): Observable<any> {
    const params = new HttpParams().set('code', code);
    return this.http.post(`${this.helmetBaseUrl}/return`, null, { params });
  }

  // Optional: Check transaction status by unlock code
  getTransactionStatus(code: string): Observable<any> {
    const params = new HttpParams().set('code', code);
    return this.http.get(`${this.transactionBaseUrl}/status`, { params });
  }
}
