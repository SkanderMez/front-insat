import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeColumnsNoSpaceComponent } from './portfolio-three-columns-no-space.component';

describe('PortfolioThreeColumnsNoSpaceComponent', () => {
  let component: PortfolioThreeColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioThreeColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThreeColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThreeColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
