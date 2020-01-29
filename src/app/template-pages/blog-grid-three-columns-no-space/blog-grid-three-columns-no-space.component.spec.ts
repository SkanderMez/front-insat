import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridThreeColumnsNoSpaceComponent } from './blog-grid-three-columns-no-space.component';

describe('BlogGridThreeColumnsNoSpaceComponent', () => {
  let component: BlogGridThreeColumnsNoSpaceComponent;
  let fixture: ComponentFixture<BlogGridThreeColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridThreeColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridThreeColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
