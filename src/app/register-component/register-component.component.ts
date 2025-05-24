import { Component } from '@angular/core';
import { OtpserviceService } from '../otpservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';  // import AuthService

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
    private dialogRef: MatDialogRef<RegisterComponent>,
    private authService: AuthService   // inject AuthService
  ) {}

  sendOtp() {
    this.otpService.sendOtp(this.phone).subscribe({
      next: () => {
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
      next: (res: any) => {
        this.statusMessage = 'Verification successful';

        // Store login state and phone in AuthService (which uses localStorage internally)
        this.authService.setPhone(this.phone);
        localStorage.setItem('isLoggedIn', 'true');

        // Store userId if returned by backend (example assumes res.userId)
        if (res.userId) {
          this.authService.setUserId(res.userId);
        }

        // Close dialog and notify parent
        this.dialogRef.close('registered');
      },
      error: err => {
        this.statusMessage = 'Verification failed';
        console.error(err);
      }
    });
  }
}
