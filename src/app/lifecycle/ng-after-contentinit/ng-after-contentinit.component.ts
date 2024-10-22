import { Component } from '@angular/core';
import {ChildAfterContentinitComponent} from './child-after-contentinit/child-after-contentinit.component';

@Component({
  selector: 'app-ng-after-contentinit',
  standalone: true,
  imports: [
    ChildAfterContentinitComponent
  ],
  templateUrl: './ng-after-contentinit.component.html',
  styleUrl: './ng-after-contentinit.component.css'
})
export class NgAfterContentinitComponent {

}
