import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact3Component } from './contact3.component';

describe('Contact3Component', () => {
  let component: Contact3Component;
  let fixture: ComponentFixture<Contact3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
