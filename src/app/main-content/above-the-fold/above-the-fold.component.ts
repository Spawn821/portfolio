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
  picturePos: any;

  constructor() {
    window.addEventListener('resize', () => {
      this.pictureRect();
      this.positioningVectorBanner();
    })

    window.onresize = () => {
      this.pictureRect();
      this.positioningVectorBanner();
    }
  }


  ngOnInit(): void {
    this.pictureRect();
    this.positioningVectorBanner();
    animationScroll('hidden-left', 'show-left');
    animationScroll('hidden-right', 'show-right');
  }


  ngOnChange(): void {
    this.pictureRect();
    this.positioningVectorBanner();
  }


  positioningVectorBanner() {
    let vectorBanner  = document.getElementById('vector-banner');

    let windowWidth = window.innerWidth;
    //let windowWidth1440px = window.matchMedia('(max-width: 1440px)');

    let windowWidthConstant = 1500;
    let translateYConstant = -500;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (this.picturePos.bottom + translateYConstant + translateY) + 'px';
    }
  }

  pictureRect() {
    this.picturePos = document.querySelector('#profile-picture')?.getBoundingClientRect();
  }
}