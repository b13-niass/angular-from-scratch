import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser() {
    return { name: 'John Doe', age: 30 };
  }
}
