import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourColumnsNoSpaceComponent } from './portfolio-four-columns-no-space.component';

describe('PortfolioFourColumnsNoSpaceComponent', () => {
  let component: PortfolioFourColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioFourColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFourColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFourColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
