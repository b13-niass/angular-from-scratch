import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-view-child',
  standalone: true,
  imports: [],
  templateUrl: './sub-view-child.component.html',
  styleUrl: './sub-view-child.component.css'
})
export class SubViewChildComponent {
  value = 0;

  incrementValue() {
    this.value++;
  }
}
