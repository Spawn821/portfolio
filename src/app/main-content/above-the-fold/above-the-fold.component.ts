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

    window.addEventListener('resize', () => {
      this.positioningVectorBanner();
    })
  }


  positioningVectorBanner() {
    let vectorBanner = document.getElementById('vector-banner');
    let picturePos = document.querySelector('#profile-picture')?.getBoundingClientRect().bottom;

    let windowWidth = window.innerWidth;
    let windowWidth1200px = window.matchMedia('(max-width: 1200px)');
    let windowWidth550px = window.matchMedia('(max-width: 450px)');

    let windowWidthConstant = 1500;
    let translateYConstant = windowWidth550px.matches ? -475 : windowWidth1200px.matches ? -450 : -500;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (picturePos! + translateYConstant + translateY) + 'px';
    }
  }
}