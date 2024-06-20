import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {animationScroll} from "../../../../main";

@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {

  windowSize: MediaQueryList = window.matchMedia('(max-width: 1300px)');

  @Input() project = {
    img: './../../../assets/graphics/portfolio/join.png',
    headline: 'Join',
    technologies: 'JavaScript | HTML | CSS',
    description: 'Task manager inpired by the Kanban System. Create and organize tasks using drag functions, assign users and categories.',
    runOn: 'Chrom, Edge und Firefox',
    liveTest: 'https://join.stephan-schmidt-web-developer.de',
    github: 'https://github.com/Spawn821/project_join_own_version'
  }

  @Input() index = 0;

  constructor() {
    window.addEventListener('scroll', () => {
      animationScroll('hidden-left', 'show-left');
    })
  }


  ngOnInit(): void {
    animationScroll('hidden-left', 'show-left');
  }

  isSecondElement(shadow: boolean = false) {
    if (this.windowSize.matches && !shadow) {
      return false;
    } else {
      let secondElement: boolean = this.index / 2 ? true : false;
      return secondElement;
    }
  }
}
