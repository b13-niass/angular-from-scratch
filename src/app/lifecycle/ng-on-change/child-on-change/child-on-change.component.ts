import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-on-change',
  standalone: true,
  imports: [],
  templateUrl: './child-on-change.component.html',
  styleUrl: './child-on-change.component.css'
})
export class ChildOnChangeComponent implements OnChanges{
  @Input() childValue: string = '';
  @Input() user = { name: ''};
  constructor() {
    // console.log(1);
  }
  ngOnChanges(changes: SimpleChanges): void { // appeler si @Input change
    console.log(changes) // Output: { childValue: SimpleChange{ previousValue: 'bo', currentValue: 'bon', firstChange: true, isFirstChange: true } }
  }
}
