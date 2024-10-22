import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingParentComponent } from './two-way-binding-parent.component';

describe('TwoWayBindingParentComponent', () => {
  let component: TwoWayBindingParentComponent;
  let fixture: ComponentFixture<TwoWayBindingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
