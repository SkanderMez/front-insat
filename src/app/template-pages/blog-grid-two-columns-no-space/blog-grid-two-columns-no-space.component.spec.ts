import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridTwoColumnsNoSpaceComponent } from './blog-grid-two-columns-no-space.component';

describe('BlogGridTwoColumnsNoSpaceComponent', () => {
  let component: BlogGridTwoColumnsNoSpaceComponent;
  let fixture: ComponentFixture<BlogGridTwoColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridTwoColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridTwoColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
