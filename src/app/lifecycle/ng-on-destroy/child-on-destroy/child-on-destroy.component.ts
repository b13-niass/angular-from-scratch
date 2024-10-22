import { Component } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-child-on-destroy',
  standalone: true,
  imports: [],
  templateUrl: './child-on-destroy.component.html',
  styleUrl: './child-on-destroy.component.css'
})
export class ChildOnDestroyComponent {
  counter: number = 0;
  private counterSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.counterSubscription = interval(1000).subscribe((value) => {
      this.counter = value;
    });
  }

  ngOnDestroy(): void {
    console.log('CounterComponent is being destroyed');
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
