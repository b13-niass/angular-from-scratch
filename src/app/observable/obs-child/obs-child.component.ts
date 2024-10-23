import { Component } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-obs-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs-child.component.html',
  styleUrl: './obs-child.component.css',
})
export class ObsChildComponent {
  title = 'Observable Demo';
  data$: Observable<any[]> = new Observable<any[]>();
  filteredData: any[] = [];
  selectedItem: any;
  subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getData();

    this.subscription = this.data$.subscribe((data) => {
      console.log('Data received:', data);
    });

    this.subscription = this.data$
      .pipe(map((items) => items.filter((item) => item.category === 'fruit')))
      .subscribe((filteredItems) => {
        this.filteredData = filteredItems;
        console.log('Filtered Data:', this.filteredData);
      });
  }

  getItemDetails(id: number): void {
    this.dataService.getItemById(id).subscribe((item) => {
      this.selectedItem = item;
      console.log('Selected Item:', this.selectedItem);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
