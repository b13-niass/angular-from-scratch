import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-control-counter',
  standalone: true,
  imports: [],
  templateUrl: './control-counter.component.html',
  styleUrl: './control-counter.component.css'
})
export class ControlCounterComponent {
  constructor(public counterService: CounterService) {}

}
