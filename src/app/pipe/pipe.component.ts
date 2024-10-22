import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {SearchPipe} from './search.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    SearchPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit{
  public query:any = '';
  locked: any[] = [];

  constructor(){}

  ngOnInit(){
    this.locked = [
      {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
      {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
      {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
      {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
    ]
  }
}
