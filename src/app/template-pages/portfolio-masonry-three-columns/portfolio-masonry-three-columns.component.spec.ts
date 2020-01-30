import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryThreeColumnsComponent } from './portfolio-masonry-three-columns.component';

describe('PortfolioMasonryThreeColumnsComponent', () => {
  let component: PortfolioMasonryThreeColumnsComponent;
  let fixture: ComponentFixture<PortfolioMasonryThreeColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryThreeColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
