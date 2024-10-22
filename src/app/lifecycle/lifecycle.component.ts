import { Component } from '@angular/core';
import {NgOnChangeComponent} from './ng-on-change/ng-on-change.component';
import {NgOnInitComponent} from './ng-on-init/ng-on-init.component';
import {NgOnDocheckComponent} from './ng-on-docheck/ng-on-docheck.component';
import {NgAfterContentinitComponent} from './ng-after-contentinit/ng-after-contentinit.component';
import {NgOnDestroyComponent} from './ng-on-destroy/ng-on-destroy.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [NgOnChangeComponent, NgOnInitComponent, NgOnDocheckComponent, NgAfterContentinitComponent, NgOnDestroyComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

}
