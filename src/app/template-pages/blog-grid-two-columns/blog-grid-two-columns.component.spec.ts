import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridTwoColumnsComponent } from './blog-grid-two-columns.component';

describe('BlogGridTwoColumnsComponent', () => {
  let component: BlogGridTwoColumnsComponent;
  let fixture: ComponentFixture<BlogGridTwoColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridTwoColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
