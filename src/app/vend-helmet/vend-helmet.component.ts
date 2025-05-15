import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendPopupComponent } from '../vend-popup/vend-popup.component';

@Component({
  selector: 'app-vend-helmet',
  templateUrl: './vend-helmet.component.html',
  styleUrls: ['./vend-helmet.component.css']
})
export class VendHelmetComponent {
  location: string = '';
  helmets = [
    { id: 1, status: 'Available' },
    { id: 2, status: 'Available' }
  ];
  isHelmetListVisible = false;

  constructor(private dialog: MatDialog) {}

  searchHelmets() {
    if (!this.location.trim()) {
      alert('Please enter a location to search helmets.');
      return;
    }
    // Simulated helmet search (can later call backend here)
    this.isHelmetListVisible = true;
  }

  vendHelmet(helmetId: number) {
    if (!this.location.trim()) {
      alert('Location is required before vending a helmet.');
      return;
    }

    // Simulate backend API call to vend helmet
    const userId = 123; // Simulated logged-in user ID
    const unlockCode = Math.floor(10000 + Math.random() * 90000); // 5-digit code

    // Later: Replace this with an actual service call
    const payload = {
      userId: userId,
      helmetId: helmetId,
      location: this.location,
      unlockCode: unlockCode
    };
    console.log('Sending vend API call with payload:', payload);

    this.dialog.open(VendPopupComponent, {
      data: { helmetId, unlockCode },
      width: '300px'
    });
  }
}
