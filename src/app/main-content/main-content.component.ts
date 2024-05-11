import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AboveTheFoldComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
