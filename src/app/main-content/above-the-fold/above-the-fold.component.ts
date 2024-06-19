import { Component } from '@angular/core';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  constructor() {
    window.addEventListener('resize', () => {
      this.positioningVectorBanner();
    })

    window.addEventListener('scroll', () => {
      animationScroll('hidden-left', 'show-left');
      animationScroll('hidden-right', 'show-right');
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

    let windowWidthConstant = 2500;
    let translateYConstant = 85;

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (translateYConstant + translateY) + 'px';
    }
  }
}
