import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSkillsComponent } from './core-skills.component';

describe('CoreSkillsComponent', () => {
  let component: CoreSkillsComponent;
  let fixture: ComponentFixture<CoreSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
