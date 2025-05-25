import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelmetTransactionService } from '../helmet-transaction.service';
import { LocationService } from '../location.service';
import { VendPopupComponent } from '../vend-popup/vend-popup.component';

@Component({
  selector: 'app-vend-helmet',
  templateUrl: './vend-helmet.component.html',
  styleUrls: ['./vend-helmet.component.css']
})
export class VendHelmetComponent implements OnInit {
  location: string = '';
  locations: string[] = []; // holds location names
  helmets: any[] = [];
  isHelmetListVisible = false;

  constructor(
    private dialog: MatDialog,
    private helmetService: HelmetTransactionService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.locationService.getAllLocations().subscribe({
      next: (response) => {
        // Map response to extract just location names
        this.locations = response.map((loc: any) => loc.name);
      },
      error: (err) => {
        console.error('Failed to load locations:', err);
        alert('Error loading locations. Please try again.');
      }
    });
  }

  searchHelmets() {
    if (!this.location.trim()) {
      alert('Please select a location.');
      return;
    }

    this.locationService.getHelmetsByLocation(this.location).subscribe({
      next: (helmets) => {
        this.helmets = helmets;
        this.isHelmetListVisible = true;
      },
      error: (err) => {
        console.error('Error fetching helmets:', err);
        alert('No helmets found or server error.');
      }
    });
  }

  vendHelmet(helmetId: number) {
    const userId = 123; // replace with real user ID
    this.helmetService.vendHelmet(userId, helmetId, this.location).subscribe({
      next: (response) => {
        const unlockCode = response.code;
        this.dialog.open(VendPopupComponent, {
          data: { helmetId, unlockCode },
          width: '300px'
        });
      },
      error: (err) => {
        console.error('Failed to vend helmet:', err);
        alert('Failed to vend helmet.');
      }
    });
  }
}


