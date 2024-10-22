import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-child',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './two-way-binding-child.component.html',
  styleUrl: './two-way-binding-child.component.css'
})
export class TwoWayBindingChildComponent {
  @Input() childValue: string = '';
  @Output() childValueChange= new EventEmitter<string>();

  onValueChange(value: string) {
    this.childValue = value;
    this.childValueChange.emit(this.childValue);
  }

}
