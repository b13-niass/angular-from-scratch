import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewChildrenComponent } from './sub-view-children.component';

describe('SubViewChildrenComponent', () => {
  let component: SubViewChildrenComponent;
  let fixture: ComponentFixture<SubViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubViewChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
