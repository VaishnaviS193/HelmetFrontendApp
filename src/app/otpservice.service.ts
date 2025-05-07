import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  private baseUrl = 'http://localhost:8080/api/otp';
  constructor(private http: HttpClient) { }

  //Send OTP to given phone number
  sendOtp(phone: string): Observable<any> {
    const body = new HttpParams().set('phone', phone);  // URL encode the phone number
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(`${this.baseUrl}/send`, body.toString(), {
      headers,
      responseType: 'text'  
    });
  }

  // Verify OTP for a given phone number
  verifyOtp(phone: string, code: string): Observable<any> {
    const body = new HttpParams()
      .set('phone', phone)
      .set('code', code);  // URL encode phone and code
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(`${this.baseUrl}/verify`, body.toString(), {
      headers,
      responseType: 'text'  
    });
  }
}
