import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SyntaxesComponent} from './syntaxes/syntaxes.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgIf} from '@angular/common';
import {StandaloneComponent} from './standalone/standalone.component';
import {InputParentComponent} from './input-parent/input-parent.component';
import {OutputParentComponent} from './output-parent/output-parent.component';
import {TwoWayBindingParentComponent} from './two-way-binding-parent/two-way-binding-parent.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {OutputTwoParentComponent} from './output-two-parent/output-two-parent.component';
import {PipeComponent} from './pipe/pipe.component';
import {FluxControlComponent} from './flux-control/flux-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    SyntaxesComponent,
    NavbarComponent,
    StandaloneComponent,
    InputParentComponent,
    OutputParentComponent,
    TwoWayBindingParentComponent,
    LifecycleComponent,
    OutputTwoParentComponent,
    PipeComponent,
    FluxControlComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-from-scratch';
}
