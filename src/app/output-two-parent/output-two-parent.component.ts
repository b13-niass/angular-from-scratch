import { Component } from '@angular/core';
import {OutputTwoChildComponent} from './output-two-child/output-two-child.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-output-two-parent',
  standalone: true,
  imports: [
    OutputTwoChildComponent, NgIf
  ],
  templateUrl: './output-two-parent.component.html',
  styleUrl: './output-two-parent.component.css'
})
export class OutputTwoParentComponent {
  receivedValue1: string | null = null;
  receivedValue2: number | null = null;

  // Function to handle emitted values
  // handleValues(event: { value1: string, value2: number }) {
  //   this.receivedValue1 = event.value1;
  //   this.receivedValue2 = event.value2;
  // }

  handleFirstValue(a: string) {
  this.receivedValue1 = a;
  }

  handleSecondValue(b: number) {
    this.receivedValue2 = b;
  }
}
