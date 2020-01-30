import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourColumnsWithFrameComponent } from './portfolio-four-columns-with-frame.component';

describe('PortfolioFourColumnsWithFrameComponent', () => {
  let component: PortfolioFourColumnsWithFrameComponent;
  let fixture: ComponentFixture<PortfolioFourColumnsWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFourColumnsWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFourColumnsWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
