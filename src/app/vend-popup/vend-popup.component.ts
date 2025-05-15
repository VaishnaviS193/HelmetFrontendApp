import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vend-popup',
  templateUrl: './vend-popup.component.html',
  styleUrls: ['./vend-popup.component.css']
})
export class VendPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { helmetId: number; unlockCode: number }) {}
}
