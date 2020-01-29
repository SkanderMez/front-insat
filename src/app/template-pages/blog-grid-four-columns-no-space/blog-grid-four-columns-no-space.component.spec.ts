import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridFourColumnsNoSpaceComponent } from './blog-grid-four-columns-no-space.component';

describe('BlogGridFourColumnsNoSpaceComponent', () => {
  let component: BlogGridFourColumnsNoSpaceComponent;
  let fixture: ComponentFixture<BlogGridFourColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridFourColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridFourColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
