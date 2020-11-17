import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentComponentComponent } from './enrollment-component.component';

describe('EnrollmentComponentComponent', () => {
  let component: EnrollmentComponentComponent;
  let fixture: ComponentFixture<EnrollmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
