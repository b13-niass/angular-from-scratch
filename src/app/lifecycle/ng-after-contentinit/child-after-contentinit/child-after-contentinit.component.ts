import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-child-after-contentinit',
  standalone: true,
  imports: [],
  templateUrl: './child-after-contentinit.component.html',
  styleUrl: './child-after-contentinit.component.css'
})
export class ChildAfterContentinitComponent implements AfterContentInit{
  ngAfterContentInit() {
    console.log(1);
  }
}
