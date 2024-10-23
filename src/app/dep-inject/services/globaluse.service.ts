import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobaluseService {
  constructor() {}

  messageForAll() {
    console.log('This message is shared across all components');
  }
}
