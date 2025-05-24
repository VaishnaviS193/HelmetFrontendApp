import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { RegisterComponent } from '../register-component/register-component.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;// <- IMPORTANT

  isAuthenticated: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('phone');
    this.isAuthenticated = !!storedUser;
  }

  // Navigation with auth check for vend
  navigateTo(route: string) {
    if (route === 'vend' && !this.isAuthenticated) {
      this.openRegisterDialog();
    } else {
      this.router.navigate([`/${route}`]);
    }
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'registered') {
        this.isAuthenticated = true;
        const storedUser = localStorage.getItem('phone');
        if (storedUser) {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  // This toggles the side nav drawer
  toggleProfileNav() {
    if (this.isAuthenticated && this.drawer) {
      this.drawer.toggle();
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('phone');
    this.router.navigate(['/home']);
    // close drawer on logout if open
    if (this.drawer && this.drawer.opened) {
      this.drawer.close();
    }
  }
}
