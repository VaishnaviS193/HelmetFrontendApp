import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrl: './landing-component.component.css'
})
export class LandingComponentComponent {
  showOtp = true; //false
  showSplash = true;

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.showSplash = false;
  //   }, 8000); // Show splash for 4 seconds
  // }

  activateOtp() {
      console.log("clicked")
      this.showOtp = true;
      this.showSplash = false;
    
  }
}
