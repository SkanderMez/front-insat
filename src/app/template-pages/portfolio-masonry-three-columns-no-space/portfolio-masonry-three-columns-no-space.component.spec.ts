import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryThreeColumnsNoSpaceComponent } from './portfolio-masonry-three-columns-no-space.component';

describe('PortfolioMasonryThreeColumnsNoSpaceComponent', () => {
  let component: PortfolioMasonryThreeColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioMasonryThreeColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryThreeColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryThreeColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
