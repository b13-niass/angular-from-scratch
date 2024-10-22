import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChildOnChangeComponent} from './child-on-change/child-on-change.component';

@Component({
  selector: 'app-ng-on-change',
  standalone: true,
  imports: [
    FormsModule, ChildOnChangeComponent
  ],
  templateUrl: './ng-on-change.component.html',
  styleUrl: './ng-on-change.component.css'
})

export class NgOnChangeComponent{
  childValue: string = '';
  user = { name: ''};
}
