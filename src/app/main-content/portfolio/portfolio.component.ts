import { Component, inject } from '@angular/core';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { ProjectdataService } from './projectdata.service';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleprojectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectlistdata = inject(ProjectdataService);

  constructor() {
    window.addEventListener('scroll', () => {
      animationScroll('hidden-right', 'show-right');
    })
  }


  ngOnInit(): void {
    animationScroll('hidden-right', 'show-right');
  }
}
