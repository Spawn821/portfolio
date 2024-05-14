import { Component, inject } from '@angular/core';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { ProjectdataService } from './projectdata.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleprojectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projectlistdata = inject(ProjectdataService);
}
