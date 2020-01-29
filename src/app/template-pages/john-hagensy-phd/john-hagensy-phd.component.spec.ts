import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnHagensyPhdComponent } from './john-hagensy-phd.component';

describe('JohnHagensyPhdComponent', () => {
  let component: JohnHagensyPhdComponent;
  let fixture: ComponentFixture<JohnHagensyPhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnHagensyPhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnHagensyPhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
