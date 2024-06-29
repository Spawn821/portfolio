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
    let windowWidth1440px = window.matchMedia('(max-width: 1440px)');
    let windowWidth1000px = window.matchMedia('(max-width: 1000px)');
    let windowWidth550px = window.matchMedia('(max-width: 550px)');
    let windowHeight1440px = window.matchMedia('(min-height: 1440px)');

    let windowWidthConstant = 2500;
    let translateYConstant = windowHeight1440px.matches ? 550 : 200;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (translateYConstant + translateY) + 'px';
    }
  }
}
