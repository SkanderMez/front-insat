import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonryTwoColumnsComponent } from './portfolio-masonry-two-columns.component';

describe('PortfolioMasonryTwoColumnsComponent', () => {
  let component: PortfolioMasonryTwoColumnsComponent;
  let fixture: ComponentFixture<PortfolioMasonryTwoColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMasonryTwoColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMasonryTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
