import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToFinancialAccountingComponent } from './introduction-to-financial-accounting.component';

describe('IntroductionToFinancialAccountingComponent', () => {
  let component: IntroductionToFinancialAccountingComponent;
  let fixture: ComponentFixture<IntroductionToFinancialAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToFinancialAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToFinancialAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
