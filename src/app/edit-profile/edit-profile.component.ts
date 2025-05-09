import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  userName: string = 'John Doe';  // Example name

  saveChanges() {
    // Implement save logic (e.g., call an API to update user profile)
    console.log('Profile saved:', this.userName);
  }
}
