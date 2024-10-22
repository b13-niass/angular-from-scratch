import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChildOnDocheckComponent} from './child-on-docheck/child-on-docheck.component';

@Component({
  selector: 'app-ng-on-docheck',
  standalone: true,
  imports: [
    FormsModule,
    ChildOnDocheckComponent
  ],
  templateUrl: './ng-on-docheck.component.html',
  styleUrl: './ng-on-docheck.component.css'
})
export class NgOnDocheckComponent {
  childValue: string = '';
}
