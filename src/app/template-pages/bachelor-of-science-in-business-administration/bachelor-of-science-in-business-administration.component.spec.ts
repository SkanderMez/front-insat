import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorOfScienceInBusinessAdministrationComponent } from './bachelor-of-science-in-business-administration.component';

describe('BachelorOfScienceInBusinessAdministrationComponent', () => {
  let component: BachelorOfScienceInBusinessAdministrationComponent;
  let fixture: ComponentFixture<BachelorOfScienceInBusinessAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorOfScienceInBusinessAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorOfScienceInBusinessAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
