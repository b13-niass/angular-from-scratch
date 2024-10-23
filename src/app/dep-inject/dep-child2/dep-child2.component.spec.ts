import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepChild2Component } from './dep-child2.component';

describe('DepChild2Component', () => {
  let component: DepChild2Component;
  let fixture: ComponentFixture<DepChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
