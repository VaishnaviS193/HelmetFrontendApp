import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Check login status
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Get user phone number
  getPhone(): string | null {
    return localStorage.getItem('userPhone');
  }

  // Set user phone number
  setPhone(phone: string): void {
    localStorage.setItem('userPhone', phone);
  }

  // Get user ID as string or null
 getUserId(): string | null {
  return localStorage.getItem('userId');
}


  // Set user ID (save as string)
  setUserId(id: number | string): void {
    localStorage.setItem('userId', id.toString());
  }

  // Clear all stored data on logout
  logout(): void {
    localStorage.clear();
  }
}
