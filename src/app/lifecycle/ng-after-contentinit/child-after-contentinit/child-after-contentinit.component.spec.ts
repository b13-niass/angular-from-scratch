import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterContentinitComponent } from './child-after-contentinit.component';

describe('ChildAfterContentinitComponent', () => {
  let component: ChildAfterContentinitComponent;
  let fixture: ComponentFixture<ChildAfterContentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAfterContentinitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAfterContentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
