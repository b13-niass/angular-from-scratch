import { Component } from '@angular/core';
import { LogService } from '../services/log.service';
import { GlobaluseService } from '../services/globaluse.service';

@Component({
  selector: 'app-dep-child2',
  standalone: true,
  imports: [],
  templateUrl: './dep-child2.component.html',
  styleUrl: './dep-child2.component.css',
  providers: [LogService], // Dependency Injection of LogService in ChildComponent class.
})
export class DepChild2Component {
  constructor(
    private logService: LogService,
    private globalService: GlobaluseService
  ) {}

  logMessage() {
    this.logService.log('Button clicked in ChildComponent');
    this.globalService.messageForAll();
  }
}
