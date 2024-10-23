import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter= signal(0);

  increment() {
    this.counter.update(prev => prev + 1);
  }

  decrement() {
    this.counter.update(prev => prev - 1);
  }

}
