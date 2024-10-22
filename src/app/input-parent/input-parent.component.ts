import { Component } from '@angular/core';
import {InputChildComponent} from './input-child/input-child.component';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  imports: [InputChildComponent],
  templateUrl: './input-parent.component.html',
  styleUrl: './input-parent.component.css'
})
export class InputParentComponent {
  cardTitle = 'Titre de la Carte';
  cardDescription = 'Ceci est une description pour le composant enfant.';
}
