import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss']
})
export class SkillCardsComponent {
  coreSkills = [
    {
      name: 'JavaScript',
      path: 'javascript.svg'
    },
    {
      name: 'Angular',
      path: 'angular.svg'
    },
    {
      name: 'HTML',
      path: 'html.svg'
    },
    {
      name: 'CSS',
      path: 'css.svg'
    },
    {
      name: 'ReactiveX',
      path: 'reactivex.svg'
    },
    {
      name: 'Redux',
      path: 'redux.svg'
    },
    {
      name: 'AngularJS',
      path: 'angularjs.png'
    },
    {
      name: 'Node/Express',
      path: 'express.svg'
    },
    {
      name: 'Electron',
      path: 'electron.svg'
    },
    {
      name: 'React',
      path: 'react.svg'
    },
    {
      name: 'Git/Version Control',
      path: 'git.svg'
    },
    {
      name: 'Python',
      path: 'python.svg'
    }
  ]

}

