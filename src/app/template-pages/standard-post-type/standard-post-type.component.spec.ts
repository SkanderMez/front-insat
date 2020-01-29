import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPostTypeComponent } from './standard-post-type.component';

describe('StandardPostTypeComponent', () => {
  let component: StandardPostTypeComponent;
  let fixture: ComponentFixture<StandardPostTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPostTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPostTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
