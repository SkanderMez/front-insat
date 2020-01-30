import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourColumnsComponent } from './portfolio-four-columns.component';

describe('PortfolioFourColumnsComponent', () => {
  let component: PortfolioFourColumnsComponent;
  let fixture: ComponentFixture<PortfolioFourColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFourColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFourColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
