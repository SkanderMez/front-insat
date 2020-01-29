import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleportfolioComponent } from './singleportfolio.component';

describe('SingleportfolioComponent', () => {
  let component: SingleportfolioComponent;
  let fixture: ComponentFixture<SingleportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
