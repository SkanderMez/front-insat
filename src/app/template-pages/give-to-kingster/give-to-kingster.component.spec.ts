import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveToKingsterComponent } from './give-to-kingster.component';

describe('GiveToKingsterComponent', () => {
  let component: GiveToKingsterComponent;
  let fixture: ComponentFixture<GiveToKingsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveToKingsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveToKingsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
