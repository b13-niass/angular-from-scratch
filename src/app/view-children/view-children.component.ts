import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SubViewChildrenComponent} from './sub-view-children/sub-view-children.component';

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [
    SubViewChildrenComponent
  ],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent {
  // Référence au composant enfant
  @ViewChildren(SubViewChildrenComponent) childrens!: QueryList<SubViewChildrenComponent>;
  incrementChildValue() {
    this.childrens.forEach((child) => {
      child.incrementValue();
    });
  }
}
