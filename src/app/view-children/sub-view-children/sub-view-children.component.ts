import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sub-view-children',
  standalone: true,
  imports: [],
  templateUrl: './sub-view-children.component.html',
  styleUrl: './sub-view-children.component.css'
})
export class SubViewChildrenComponent {
  value = 0;
  @ViewChild('childtest') childTestElement!: ElementRef;
  //@ContenChild('childContentId)

  incrementValue() {
    this.value++;
    // console.log(this.childTestElement);
  }
}
