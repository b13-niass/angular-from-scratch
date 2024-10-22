import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnDocheckComponent } from './child-on-docheck.component';

describe('ChildOnDocheckComponent', () => {
  let component: ChildOnDocheckComponent;
  let fixture: ComponentFixture<ChildOnDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOnDocheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
