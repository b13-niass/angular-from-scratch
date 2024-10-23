import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  computed,
  DoCheck,
  effect,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit
{
  title = signal('');
  title2 = signal('');
  users = signal<UserInterface[]>([]);

  titleChangeEffect = effect(() => {
    console.log('titleChangeEffect', this.title());
  });

  titleComputed = computed(() => this.users().length);

  changeTitle(event: Event) {
    const t = (event.target as HTMLInputElement).value;
    this.title.set(t);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SignalComponent: ngOnChanges');
  }

  ngOnInit(): void {
    console.log('SignalComponent: ngOnInit');

    setTimeout(() => {
      // this.users.set([
      //   { id: '1', name: 'John Doe' }
      // ]);
      // this.users.update((users) => [...users, { id: '2', name: 'Jane Doe' }]);
      console.log('Users set:', this.users());
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('SignalComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('SignalComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('SignalComponent: ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('SignalComponent: ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('SignalComponent: ngAfterViewInit');
  }
}
