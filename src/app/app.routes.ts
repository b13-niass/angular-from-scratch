import { Routes } from '@angular/router';
import { DepChild1Component } from './dep-inject/dep-child1/dep-child1.component';
import { DepChild2Component } from './dep-inject/dep-child2/dep-child2.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dep-inject1', component: DepChild1Component },
  { path: 'dep-inject2', component: DepChild2Component },
];
