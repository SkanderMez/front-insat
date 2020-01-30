import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoColumnsNoSpaceComponent } from './portfolio-two-columns-no-space.component';

describe('PortfolioTwoColumnsNoSpaceComponent', () => {
  let component: PortfolioTwoColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioTwoColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTwoColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTwoColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
