import { Component } from '@angular/core';
import {ChildOnDestroyComponent} from './child-on-destroy/child-on-destroy.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ng-on-destroy',
  standalone: true,
  imports: [
    ChildOnDestroyComponent,
    NgIf
  ],
  templateUrl: './ng-on-destroy.component.html',
  styleUrl: './ng-on-destroy.component.css'
})
export class NgOnDestroyComponent {
  title = 'ngOnDestroy Example';
  showCounter = true;

  toggleCounter(): void {
    this.showCounter = !this.showCounter;
  }
}
