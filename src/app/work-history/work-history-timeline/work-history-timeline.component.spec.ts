import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryTimelineComponent } from './work-history-timeline.component';

describe('WorkHistoryTimelineComponent', () => {
  let component: WorkHistoryTimelineComponent;
  let fixture: ComponentFixture<WorkHistoryTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHistoryTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
