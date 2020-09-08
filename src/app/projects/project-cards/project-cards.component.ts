import { Component } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  projects = [
    {
      name: 'The Travel Book',
      path: 'the-travel-book.png',
      url: 'http://www.thetravelbook.net'
    },
    {
      name: 'Checked Mate',
      path: 'checked-mate.jpg',
      url: ''
    },
    {
      name: 'Count The Sheep',
      path: 'count-the-sheep.svg',
      url: 'http://countthesheep.net'
    },
    {
      name: 'Ochoas Mexican Grill',
      path: 'ochoas-mexican-grill.png',
      url: 'http://www.ochoasmexicangrill.com'
    }
  ]

}
