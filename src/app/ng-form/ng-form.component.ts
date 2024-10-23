import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-form.component.html',
  styleUrl: './ng-form.component.css',
})
export class NgFormComponent {
  name: string = '';
  email: string = '';

  onSubmit(form: any) {
    console.log('Form Submitted:', form.value);
  }
}
