import { Component } from '@angular/core';
import { OtpserviceService } from '../otpservice.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponent {
  phone: string = '';
  otp: string[] = ['', '', '', '', '', ''];
  otpDigits = Array(6).fill(0);
  otpSent = false;
  statusMessage = '';

  constructor(
    private otpService: OtpserviceService,
    private dialogRef: MatDialogRef<RegisterComponent>  // 👈 Add this
  ) {}

  sendOtp() {
    this.otpService.sendOtp(this.phone).subscribe({
      next: res => {
        this.otpSent = true;
        this.statusMessage = 'OTP sent!';
      },
      error: err => {
        this.statusMessage = 'Failed to send OTP';
        console.error(err);
      }
    });
  }

  verifyOtp() {
    const otpCode = this.otp.join('');
    this.otpService.verifyOtp(this.phone, otpCode).subscribe({
      next: res => {
        this.statusMessage = res;
        // ✅ Close dialog and send result to parent
        this.dialogRef.close('registered');
      },
      error: err => {
        this.statusMessage = 'Verification failed';
        console.error(err);
      }
    });
  }
}
