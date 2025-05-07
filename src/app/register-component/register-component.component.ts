import { Component } from '@angular/core';
import { OtpserviceService } from '../otpservice.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent{
  phone: string = '';
  otp: string[] = ['', '', '', '', '', ''];
  otpDigits = Array(6).fill(0);
  otpSent = false;
  statusMessage = '';

  constructor(private otpService: OtpserviceService) {}

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
      },
      error: err => {
        this.statusMessage = 'Verification failed';
        console.error(err);
      }
    });
  }
}
