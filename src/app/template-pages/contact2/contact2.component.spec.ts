import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact2Component } from './contact2.component';

describe('Contact2Component', () => {
  let component: Contact2Component;
  let fixture: ComponentFixture<Contact2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
