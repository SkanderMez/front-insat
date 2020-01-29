import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullRightSidebarWithFrameComponent } from './blog-full-right-sidebar-with-frame.component';

describe('BlogFullRightSidebarWithFrameComponent', () => {
  let component: BlogFullRightSidebarWithFrameComponent;
  let fixture: ComponentFixture<BlogFullRightSidebarWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullRightSidebarWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullRightSidebarWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
