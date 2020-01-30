import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryTwoColumnsNoSpaceComponent } from './portfolio-masonry-two-columns-no-space.component';

describe('PortfolioMasonryTwoColumnsNoSpaceComponent', () => {
  let component: PortfolioMasonryTwoColumnsNoSpaceComponent;
  let fixture: ComponentFixture<PortfolioMasonryTwoColumnsNoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryTwoColumnsNoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryTwoColumnsNoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
