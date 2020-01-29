import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullLeftSidebarComponent } from './blog-full-left-sidebar.component';

describe('BlogFullLeftSidebarComponent', () => {
  let component: BlogFullLeftSidebarComponent;
  let fixture: ComponentFixture<BlogFullLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
