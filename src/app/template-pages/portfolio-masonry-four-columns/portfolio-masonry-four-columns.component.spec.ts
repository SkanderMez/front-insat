import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryFourColumnsComponent } from './portfolio-masonry-four-columns.component';

describe('PortfolioMasonryFourColumnsComponent', () => {
  let component: PortfolioMasonryFourColumnsComponent;
  let fixture: ComponentFixture<PortfolioMasonryFourColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryFourColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryFourColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
