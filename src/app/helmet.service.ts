import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelmetService {

  private baseUrl = 'http://localhost:8080/api/helmet';  // Change this to your actual backend URL

  constructor(private http: HttpClient) { }

  vendHelmet(userId: number): Observable<any> {
    // Example: POST request to /api/helmet/vend/{userId}
    return this.http.post<any>(`${this.baseUrl}/vend/${userId}`, {});
  }
}
