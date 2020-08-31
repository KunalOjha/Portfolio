import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCarouselComponent } from './contact-carousel.component';

describe('ContactCarouselComponent', () => {
  let component: ContactCarouselComponent;
  let fixture: ComponentFixture<ContactCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
