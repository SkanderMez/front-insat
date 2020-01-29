import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToKingsterComponent } from './apply-to-kingster.component';

describe('ApplyToKingsterComponent', () => {
  let component: ApplyToKingsterComponent;
  let fixture: ComponentFixture<ApplyToKingsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToKingsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToKingsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
