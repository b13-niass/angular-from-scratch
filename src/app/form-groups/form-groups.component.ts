import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-groups',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-groups.component.html',
  styleUrl: './form-groups.component.css',
})
export class FormGroupsComponent {
  // Création d'un FormGroup pour gérer le formulaire
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Validation pour le champ nom
      email: new FormControl('', [Validators.required, Validators.email]), // Validation pour l'email
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]), // Validation pour le mot de passe
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.form.valid) {
      console.log('Formulaire valide', this.form.value);
    } else {
      console.log('Formulaire non valide');
    }
  }

  // Méthodes d'aide pour accéder facilement aux champs du formulaire
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
