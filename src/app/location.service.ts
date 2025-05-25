import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'http://localhost:8080/api/locations';

  constructor(private http: HttpClient) {}

  // Get all available locations
  getAllLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get helmets by location name
  getHelmetsByLocation(location: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${location}/helmets`);
  }
}
