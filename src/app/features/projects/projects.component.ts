import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: "projects.project5.title",
      description: "projects.project5.description",
      image: 'images/projects/portfolio.png',
      link: 'https://github.com/eamsa22/recipes-api'
    },
    {
      title: "projects.project1.title",
      description: "projects.project1.description",
      image: 'images/projects/recipes-api.png',
      link: 'https://github.com/eamsa22/recipes-api'
    },
    {
      title: "projects.project2.title",
      description: "projects.project2.description",
      image: 'images/projects/dineEasy.png',
      link: 'https://github.com/eamsa22/dine-easy-app'
    },
    {
      title: "projects.project3.title",
      description: "projects.project3.description",
      image: 'images/projects/guessing-game.png',
      link: 'https://github.com/eamsa22/guessing-game'
    },
    {
      title: "projects.project4.title",
      description: "projects.project4.description",
      image: 'images/projects/scratch-os.png',
      link: 'https://github.com/eamsa22/scratch-os'
    }
  ];
}
