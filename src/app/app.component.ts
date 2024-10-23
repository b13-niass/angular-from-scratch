import { Component, DoCheck } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SyntaxesComponent } from './syntaxes/syntaxes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgIf } from '@angular/common';
import { StandaloneComponent } from './standalone/standalone.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { TwoWayBindingParentComponent } from './two-way-binding-parent/two-way-binding-parent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { OutputTwoParentComponent } from './output-two-parent/output-two-parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { FluxControlComponent } from './flux-control/flux-control.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { DepChild1Component } from './dep-inject/dep-child1/dep-child1.component';
import { DepChild2Component } from './dep-inject/dep-child2/dep-child2.component';
import { ObsChildComponent } from './observable/obs-child/obs-child.component';
import { HttpChildComponent } from './http-client/http-child/http-child.component';
import { SignalComponent } from './signal/signal.component';
import { DisplayCounterComponent } from './without-signal/display-counter/display-counter.component';
import { ControlCounterComponent } from './without-signal/control-counter/control-counter.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { FormGroupsComponent } from './form-groups/form-groups.component';

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
    FluxControlComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    DepChild1Component,
    DepChild2Component,
    ObsChildComponent,
    HttpChildComponent,
    SignalComponent,
    DisplayCounterComponent,
    ControlCounterComponent,
    NgFormComponent,
    FormGroupsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  title = 'angular-from-scratch';

  ngDoCheck(): void {
    console.log('AppComponent: ngDoCheck');
  }
}
