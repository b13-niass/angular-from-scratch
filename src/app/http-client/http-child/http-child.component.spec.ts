import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpChildComponent } from './http-child.component';

describe('HttpChildComponent', () => {
  let component: HttpChildComponent;
  let fixture: ComponentFixture<HttpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
