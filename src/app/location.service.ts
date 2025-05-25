import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:8080/api/location';

  constructor(private http: HttpClient) {}

  // Get helmets by location name
  getHelmetsByLocation(locationName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${locationName}/helmets`);
  }

  // (Optional) Get list of all locations
  getAllLocations(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8080/api/location');
}


}
