import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact-carousel',
  templateUrl: './contact-carousel.component.html',
  styleUrls: ['./contact-carousel.component.scss']
})
export class ContactCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.contact-carousel').theta_carousel({
      distance: 40,
      designedForWidth: 942,
      designedForHeight: 625,
      distanceInFallbackMode: 300,
      path: {
        settings: {
          shiftY: 349,
          shiftZ: -1450,
          rotationAngleZY: 19,
          a: 833,
          b: 835,
          endless: true
        },
        type: 'ellipse'
      },
      perspective: 956,
      sensitivity: 0.2,
      fadeAway: true,
      fadeAwayBezierPoints: {
        p1: {
          x: 0,
          y: 100
        },
        p2: {
          x: 41,
          y: 67
        },
        p3: {
          x: 45,
          y: 67
        },
        p4: {
          x: 100,
          y: 33
        }
      },
      sizeAdjustment: true,
      sizeAdjustmentNumberOfConfigurableElements: 4,
      sizeAdjustmentBezierPoints: {
        p1: {
          x: 0,
          y: 100
        },
        p2: {
          x: 1,
          y: 61
        },
        p3: {
          x: 5,
          y: 72
        },
        p4: {
          x: 100,
          y: 72
        }
      }
    });
  }

}
