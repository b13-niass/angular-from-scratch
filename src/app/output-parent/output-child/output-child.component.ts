import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  handleClick() {
    this.buttonClicked.emit('Child button was clicked!');
  }
}
