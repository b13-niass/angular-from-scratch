import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output-two-child',
  standalone: true,
  imports: [],
  templateUrl: './output-two-child.component.html',
  styleUrl: './output-two-child.component.css'
})
export class OutputTwoChildComponent {
  // @Output() valuesEmitter: EventEmitter<{ value1: string, value2: number }> = new EventEmitter();

  @Output() firstValueEmitter = new EventEmitter<string>();
  @Output() secondValueEmitter = new EventEmitter<number>();

  emitValues() {
    const value1 = 'Hello from Child!';
    const value2 = 42;

    // this.valuesEmitter.emit({ value1, value2 });

    this.firstValueEmitter.emit();
    this.secondValueEmitter.emit();
  }
}
