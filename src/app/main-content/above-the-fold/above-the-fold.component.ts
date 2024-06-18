import { Component } from '@angular/core';

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
  }


  ngOnInit(): void {
    this.positioningVectorBanner();
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
