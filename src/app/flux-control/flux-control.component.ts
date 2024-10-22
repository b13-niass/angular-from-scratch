import { Component } from '@angular/core';
import {NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-flux-control',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './flux-control.component.html',
  styleUrl: './flux-control.component.css'
})
export class FluxControlComponent {
  title = 'Angular Flow Control Demo';

  isLoggedIn = true;
  userRole = 'admin';
  items = ['Item 1', 'Item 2', 'Item 3'];
  isLoading = true;
  showSection = true;

  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleSectionVisibility() {
    this.showSection = !this.showSection;
  }
}
