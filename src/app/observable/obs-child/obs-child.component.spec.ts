import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsChildComponent } from './obs-child.component';

describe('ObsChildComponent', () => {
  let component: ObsChildComponent;
  let fixture: ComponentFixture<ObsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
