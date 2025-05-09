import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recharge-wallet',
  templateUrl: './recharge-wallet.component.html',
  styleUrls: ['./recharge-wallet.component.css']
})
export class RechargeWalletComponent implements OnInit {
  rechargeAmount: number = 100;
  upiQRCode = 'assets/upiQRCode.jpeg';

  constructor(private location: Location) {}

  ngOnInit(): void {
    // If you need to fetch fresh data from the backend, do it here
    console.log('Recharge Wallet component initialized');
  }

  goBack() {
    this.location.back();
  }

  recharge() {
    console.log(`Recharging wallet with ₹${this.rechargeAmount}`);
    // Call backend API here
  }

validateAmount() {
  if (this.rechargeAmount < 100) {
    this.rechargeAmount = 100;
  }
}

}
