import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTwoChildComponent } from './output-two-child.component';

describe('OutputTwoChildComponent', () => {
  let component: OutputTwoChildComponent;
  let fixture: ComponentFixture<OutputTwoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputTwoChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
