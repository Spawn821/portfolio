import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {

  @Input() project = {
    img: './../../../assets/graphics/portfolio/join.png',
    headline: 'Join',
    technologies: 'JavaScript | HTML | CSS',
    description: `
        Task manager inpired by the Kanban System. Create and
        <br>
        organize tasks using drag functions, assign users and
        <br>
        categories.
      `,
    'live-test': '...',
    github: '...'
  }

  @Input() index = 0;

}
