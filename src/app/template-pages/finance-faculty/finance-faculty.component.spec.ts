import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFacultyComponent } from './finance-faculty.component';

describe('FinanceFacultyComponent', () => {
  let component: FinanceFacultyComponent;
  let fixture: ComponentFixture<FinanceFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
