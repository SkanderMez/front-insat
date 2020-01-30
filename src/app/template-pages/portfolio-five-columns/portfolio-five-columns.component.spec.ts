import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFiveColumnsComponent } from './portfolio-five-columns.component';

describe('PortfolioFiveColumnsComponent', () => {
  let component: PortfolioFiveColumnsComponent;
  let fixture: ComponentFixture<PortfolioFiveColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFiveColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFiveColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
