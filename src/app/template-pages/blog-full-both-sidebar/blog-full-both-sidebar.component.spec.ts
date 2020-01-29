import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullBothSidebarComponent } from './blog-full-both-sidebar.component';

describe('BlogFullBothSidebarComponent', () => {
  let component: BlogFullBothSidebarComponent;
  let fixture: ComponentFixture<BlogFullBothSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullBothSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullBothSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
