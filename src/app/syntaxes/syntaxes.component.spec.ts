import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxesComponent } from './syntaxes.component';

describe('SyntaxesComponent', () => {
  let component: SyntaxesComponent;
  let fixture: ComponentFixture<SyntaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyntaxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyntaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
