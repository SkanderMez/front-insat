import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFiveColumnsNoSpaceComponent } from './portfolio-five-columns-no-space.component';

describe('PortfolioFiveColumnsNoSpaceComponent', () => {
  let component: PortfolioFiveColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioFiveColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFiveColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFiveColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
