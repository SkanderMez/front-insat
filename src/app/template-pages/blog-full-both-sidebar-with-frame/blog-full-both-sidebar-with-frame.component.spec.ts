import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullBothSidebarWithFrameComponent } from './blog-full-both-sidebar-with-frame.component';

describe('BlogFullBothSidebarWithFrameComponent', () => {
  let component: BlogFullBothSidebarWithFrameComponent;
  let fixture: ComponentFixture<BlogFullBothSidebarWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullBothSidebarWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullBothSidebarWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
