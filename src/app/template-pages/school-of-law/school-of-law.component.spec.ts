import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolOfLawComponent } from './school-of-law.component';

describe('SchoolOfLawComponent', () => {
  let component: SchoolOfLawComponent;
  let fixture: ComponentFixture<SchoolOfLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolOfLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
