import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechExperienceComponent } from './tech-experience.component';

describe('TechExperienceComponent', () => {
  let component: TechExperienceComponent;
  let fixture: ComponentFixture<TechExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
