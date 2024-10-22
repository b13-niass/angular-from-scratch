import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SyntaxesComponent} from './syntaxes/syntaxes.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf, SyntaxesComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-from-scratch';
}
