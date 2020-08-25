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
      path: 'the-travel-book.png'
    },
    {
      name: 'Checked Mate',
      path: 'checked-mate.jpg'
    },
    {
      name: 'Counting Sheep',
      path: 'counting-sheep.png'
    },
    {
      name: 'Ochoas Mexican Grill',
      path: 'ochoas-mexican-grill.png'
    }
  ]

}
