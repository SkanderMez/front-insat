import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseList1Component } from './course-list1.component';

describe('CourseList1Component', () => {
  let component: CourseList1Component;
  let fixture: ComponentFixture<CourseList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
