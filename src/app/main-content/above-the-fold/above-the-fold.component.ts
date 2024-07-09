import { Component, Input, SimpleChanges } from '@angular/core';
import { animationScroll } from "../../../main";

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


  ngOnInit(): void {
    this.positioningVectorBanner();
    animationScroll('hidden-left', 'show-left');
    animationScroll('hidden-right', 'show-right');
  }


  positioningVectorBanner() {
    let vectorBanner = document.getElementById('vector-banner');
    let portraitBottom = document.getElementById('portrait')?.getBoundingClientRect().bottom;
    let windowWidth1200px = window.matchMedia('(max-width: 1200px)');
    let windowWidth550px = window.matchMedia('(max-width: 550px)');

    let windowWidth = window.innerWidth;

    let windowWidthConstant = 1500;
    let translateYConstant = windowWidth550px.matches ? -540 : windowWidth1200px.matches ? -540 : -640;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (portraitBottom! + translateYConstant + translateY) + 'px';
    }
  }
}