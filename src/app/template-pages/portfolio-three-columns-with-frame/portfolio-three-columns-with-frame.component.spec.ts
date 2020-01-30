import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeColumnsWithFrameComponent } from './portfolio-three-columns-with-frame.component';

describe('PortfolioThreeColumnsWithFrameComponent', () => {
  let component: PortfolioThreeColumnsWithFrameComponent;
  let fixture: ComponentFixture<PortfolioThreeColumnsWithFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThreeColumnsWithFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThreeColumnsWithFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
