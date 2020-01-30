import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoColumnsWithFrameComponent } from './portfolio-two-columns-with-frame.component';

describe('PortfolioTwoColumnsWithFrameComponent', () => {
  let component: PortfolioTwoColumnsWithFrameComponent;
  let fixture: ComponentFixture<PortfolioTwoColumnsWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTwoColumnsWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTwoColumnsWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
