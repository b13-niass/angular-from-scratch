import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-display-counter',
  standalone: true,
  imports: [],
  templateUrl: './display-counter.component.html',
  styleUrl: './display-counter.component.css'
})
export class DisplayCounterComponent {
  constructor(public counterService: CounterService) {}
}
