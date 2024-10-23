import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepChild1Component } from './dep-child1.component';

describe('DepChild1Component', () => {
  let component: DepChild1Component;
  let fixture: ComponentFixture<DepChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
