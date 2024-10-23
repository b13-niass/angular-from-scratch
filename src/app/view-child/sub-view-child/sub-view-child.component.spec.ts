import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewChildComponent } from './sub-view-child.component';

describe('SubViewChildComponent', () => {
  let component: SubViewChildComponent;
  let fixture: ComponentFixture<SubViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
