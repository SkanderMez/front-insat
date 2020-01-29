import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullLeftSidebarWithFrameComponent } from './blog-full-left-sidebar-with-frame.component';

describe('BlogFullLeftSidebarWithFrameComponent', () => {
  let component: BlogFullLeftSidebarWithFrameComponent;
  let fixture: ComponentFixture<BlogFullLeftSidebarWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullLeftSidebarWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullLeftSidebarWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
