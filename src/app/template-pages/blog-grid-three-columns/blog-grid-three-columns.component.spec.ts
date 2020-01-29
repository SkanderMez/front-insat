import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridThreeColumnsComponent } from './blog-grid-three-columns.component';

describe('BlogGridThreeColumnsComponent', () => {
  let component: BlogGridThreeColumnsComponent;
  let fixture: ComponentFixture<BlogGridThreeColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridThreeColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
