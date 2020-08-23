import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechExperienceChartComponent } from './tech-experience-chart.component';

describe('TechExperienceChartComponent', () => {
  let component: TechExperienceChartComponent;
  let fixture: ComponentFixture<TechExperienceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechExperienceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechExperienceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
