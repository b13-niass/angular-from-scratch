import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-syntaxes',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './syntaxes.component.html',
  // styleUrl: './syntaxes.component.css'
  // template: `
  //   <h1>{{ title }}</h1>
  //   <button (click)="toggleVisible()">Toggle Content</button>
  //   <div *ngIf="isVisible">Contenu visible !</div>
  // `
  // styles: [
  //   'h1 { color: red; }',
  //   'button { background-color: blue; color: white; }'
  //   '.test{display: block}'
  // ]
})
export class SyntaxesComponent {
  title = 'Mon Application Angular';
  isVisible = false;
  inputControlFocus = true;
  isActive = true;
  toggleVisible() {
    this.isVisible = !this.isVisible;
    this.isActive = !this.isActive;
  }

  onInputChangeEnterOne(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('The user send : '+ (event.target as HTMLInputElement).value);
    }
  }
  onInputChangeEnterTwo(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    input.value = '';
  }

}
