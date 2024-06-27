import { Component, Input } from '@angular/core';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  @Input() languageList: any;
  @Input() currentLanguage: string = '';

  constructor() {
    window.addEventListener('resize', () => {
      this.positioningVectorBanner();
    })
  }


  ngOnInit(): void {
    this.positioningVectorBanner();
    animationScroll('hidden-left', 'show-left');
    animationScroll('hidden-right', 'show-right');
  }


  positioningVectorBanner() {
    let vectorBanner  = document.getElementById('vector-banner');
    let windowWidth = window.innerWidth;
    let windowSize1440px = window.matchMedia('(max-width: 1440px)');
    let windowSize1000px = window.matchMedia('(max-width: 1000px)');
    let windowSize550px = window.matchMedia('(max-width: 550px)');

    let windowWidthConstant = 2500;
    let translateYConstant = windowSize550px.matches ? -150 : windowSize1000px.matches ? 100 : windowSize1440px.matches ? 200 : 85;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (translateYConstant + translateY) + 'px';
    }
  }
}
