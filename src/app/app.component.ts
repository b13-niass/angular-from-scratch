import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SyntaxesComponent} from './syntaxes/syntaxes.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgIf} from '@angular/common';
import {StandaloneComponent} from './standalone/standalone.component';
import {InputParentComponent} from './input-parent/input-parent.component';
import {OutputParentComponent} from './output-parent/output-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf, SyntaxesComponent, NavbarComponent, StandaloneComponent, InputParentComponent,OutputParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-from-scratch';
}
