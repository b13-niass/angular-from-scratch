import { Component } from '@angular/core';
import {TwoWayBindingChildComponent} from './two-way-binding-child/two-way-binding-child.component';

@Component({
  selector: 'app-two-way-binding-parent',
  standalone: true,
  imports: [
    TwoWayBindingChildComponent
  ],
  templateUrl: './two-way-binding-parent.component.html',
  styleUrl: './two-way-binding-parent.component.css'
})
export class TwoWayBindingParentComponent {
  title = 'Two-Way Binding Example';
  parentValue: string = '';
}
