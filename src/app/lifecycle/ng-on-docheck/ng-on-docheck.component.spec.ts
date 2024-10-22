import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnDocheckComponent } from './ng-on-docheck.component';

describe('NgOnDocheckComponent', () => {
  let component: NgOnDocheckComponent;
  let fixture: ComponentFixture<NgOnDocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnDocheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
