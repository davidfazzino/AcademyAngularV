import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnrollComponent } from './new-enroll.component';

describe('NewEnrollComponent', () => {
  let component: NewEnrollComponent;
  let fixture: ComponentFixture<NewEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
