import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css'
})
export class NgOnInitComponent implements OnInit{
  constructor() {
    console.log('ConstructorComponent');
  }

  ngOnInit() {
    console.log('OnInitComponent');
  }
}
