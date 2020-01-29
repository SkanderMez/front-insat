import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtScienceComponent } from './art-science.component';

describe('ArtScienceComponent', () => {
  let component: ArtScienceComponent;
  let fixture: ComponentFixture<ArtScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
