import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullRightSidebarComponent } from './blog-full-right-sidebar.component';

describe('BlogFullRightSidebarComponent', () => {
  let component: BlogFullRightSidebarComponent;
  let fixture: ComponentFixture<BlogFullRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
