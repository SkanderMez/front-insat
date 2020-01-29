import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusTourComponent } from './campus-tour.component';

describe('CampusTourComponent', () => {
  let component: CampusTourComponent;
  let fixture: ComponentFixture<CampusTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
