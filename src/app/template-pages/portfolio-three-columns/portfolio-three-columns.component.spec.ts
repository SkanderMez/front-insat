import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeColumnsComponent } from './portfolio-three-columns.component';

describe('PortfolioThreeColumnsComponent', () => {
  let component: PortfolioThreeColumnsComponent;
  let fixture: ComponentFixture<PortfolioThreeColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThreeColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
