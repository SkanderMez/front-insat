import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryFourColumnsNoSpaceComponent } from './portfolio-masonry-four-columns-no-space.component';

describe('PortfolioMasonryFourColumnsNoSpaceComponent', () => {
  let component: PortfolioMasonryFourColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioMasonryFourColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryFourColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryFourColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
