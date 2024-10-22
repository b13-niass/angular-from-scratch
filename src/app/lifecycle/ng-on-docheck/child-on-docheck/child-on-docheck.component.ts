import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child-on-docheck',
  standalone: true,
  imports: [],
  templateUrl: './child-on-docheck.component.html',
  styleUrl: './child-on-docheck.component.css'
})
export class ChildOnDocheckComponent implements DoCheck{
  ngDoCheck() {
    console.log('Child On DoCheck Called');
  }
}
