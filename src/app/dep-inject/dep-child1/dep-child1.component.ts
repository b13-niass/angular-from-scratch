import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dep-child1',
  standalone: true,
  imports: [],
  templateUrl: './dep-child1.component.html',
  styleUrl: './dep-child1.component.css',
})
export class DepChild1Component {
  title = 'Angular Dependency Injection Demo';
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
