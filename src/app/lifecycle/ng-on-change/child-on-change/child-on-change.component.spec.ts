import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnChangeComponent } from './child-on-change.component';

describe('ChildOnChangeComponent', () => {
  let component: ChildOnChangeComponent;
  let fixture: ComponentFixture<ChildOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOnChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
