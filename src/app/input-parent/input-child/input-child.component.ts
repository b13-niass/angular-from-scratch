import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
