import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridFourColumnsComponent } from './blog-grid-four-columns.component';

describe('BlogGridFourColumnsComponent', () => {
  let component: BlogGridFourColumnsComponent;
  let fixture: ComponentFixture<BlogGridFourColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridFourColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridFourColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
