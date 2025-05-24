import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-recharge-wallet',
  templateUrl: './recharge-wallet.component.html',
  styleUrls: ['./recharge-wallet.component.css']
})
export class RechargeWalletComponent implements OnInit {
  rechargeAmount: number = 100;
  upiQRCode = 'assets/upiQRCode.jpeg';
  phoneNumber: string = ''; // Can be pre-filled from session/localStorage if available

  constructor(
    private location: Location,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    console.log('Recharge Wallet component initialized');
  }

  goBack() {
    this.location.back();
  }

  recharge() {
    if (!this.phoneNumber || this.rechargeAmount < 100) {
      alert('Please enter a valid phone number and an amount of ₹100 or more.');
      return;
    }

    console.log(`Recharging wallet with ₹${this.rechargeAmount} for ${this.phoneNumber}`);

    this.walletService.rechargeWallet(this.phoneNumber, this.rechargeAmount).subscribe({
      next: (response) => {
        alert(response); // Success response from backend
      },
      error: (err) => {
        alert('Recharge failed: ' + err.error);
        console.error(err);
      }
    });
  }

  validateAmount() {
    if (this.rechargeAmount < 100) {
      this.rechargeAmount = 100;
    }
  }
}
