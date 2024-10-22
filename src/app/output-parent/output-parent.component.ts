import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {OutputChildComponent} from './output-child/output-child.component';

@Component({
  selector: 'app-output-parent',
  standalone: true,
  imports: [OutputChildComponent,NgIf],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {
  message: string = '';

  onChildButtonClick(event: string) {
    this.message = event; // Store the emitted message from the child
  }
}
