import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    { id: 1, name: 'Apple', category: 'fruit' },
    { id: 2, name: 'Carrot', category: 'vegetable' },
    { id: 3, name: 'Banana', category: 'fruit' },
    { id: 4, name: 'Tomato', category: 'vegetable' },
    { id: 5, name: 'Orange', category: 'fruit' }
  ];

  getData(): Observable<any[]> {
    return of(this.data).pipe(delay(1000));
  }

  getItemById(id: number): Observable<any> {
    return of(this.data.find(item => item.id === id)).pipe(delay(1000));
  }
  
}
