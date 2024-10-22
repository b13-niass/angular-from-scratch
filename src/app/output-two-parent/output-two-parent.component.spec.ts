import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTwoParentComponent } from './output-two-parent.component';

describe('OutputTwoParentComponent', () => {
  let component: OutputTwoParentComponent;
  let fixture: ComponentFixture<OutputTwoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputTwoParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputTwoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
