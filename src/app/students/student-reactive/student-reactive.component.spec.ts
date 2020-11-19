import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReactiveComponent } from './student-reactive.component';

describe('StudentReactiveComponent', () => {
  let component: StudentReactiveComponent;
  let fixture: ComponentFixture<StudentReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
