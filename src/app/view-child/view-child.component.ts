import {Component, ViewChild} from '@angular/core';
import {SubViewChildComponent} from './sub-view-child/sub-view-child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [SubViewChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  // Référence au composant enfant
  @ViewChild(SubViewChildComponent) childComponent!: SubViewChildComponent;

  incrementChildValue() {
    this.childComponent.incrementValue(); // Appel de la méthode du composant enfant
  }
}
