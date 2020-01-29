import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityManagementComponent } from './hospitality-management.component';

describe('HospitalityManagementComponent', () => {
  let component: HospitalityManagementComponent;
  let fixture: ComponentFixture<HospitalityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalityManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
