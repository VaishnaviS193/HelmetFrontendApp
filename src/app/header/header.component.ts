// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { MatSidenav } from '@angular/material/sidenav';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   constructor(private router: Router) {}

//   // Navigate to the specified route
//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }
// }






import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from '../register-component/register-component.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  // Navigate to a specific route
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Open registration dialog
  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'registered') {
        this.isAuthenticated = true;
      }
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }
}

