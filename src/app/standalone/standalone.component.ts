import { Component } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.css'
})
export class StandaloneComponent {

}
