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

    let windowWidth = window.innerWidth;

    let windowWidthConstant = 1500;
    let translateYConstant = this.getWindowSizeMobileDevices();

    let translateY = (windowWidthConstant - windowWidth) * 0.25;

    if (vectorBanner) {
      vectorBanner.style.top = (translateYConstant + translateY) + 'px';
    }
  }

  getWindowSizeMobileDevices() {
    let windowIphoneSE = window.matchMedia('(max-width: 400px) and (max-height: 700px)')
    let windowSamsungG8P = window.matchMedia('(max-width: 400px) and (max-height: 750px)')
    let windowIphoneXR = window.matchMedia('(max-width: 450px) and (max-height: 900px)')
    let windowIphone14ProMax = window.matchMedia('(max-width: 450px) and (max-height: 1000px)')
    let windowIpadMini = window.matchMedia('(max-width: 800px) and (max-height: 1050px)')
    let windowIpadAir = window.matchMedia('(max-width: 850px) and (max-height: 1200px)')
    let windowAsusZenbookFold = window.matchMedia('(max-width: 900px) and (max-height: 1300px)')
    let windowIpadPro = window.matchMedia('(max-width: 1050px) and (max-height: 1400px)')

    if (navigator.maxTouchPoints > 0) {
      if (windowIphoneSE.matches) {
        return -80;
      }
      else if (windowSamsungG8P.matches) {
        return -56;
      }
      else if (windowIphoneXR.matches) {
        return 8;
      }
      else if (windowIphone14ProMax.matches) {
        return 24;
      }
      else if (windowIpadMini.matches) {
        return 180;
      }
      else if (windowIpadAir.matches) {
        return 280;
      }
      else if (windowAsusZenbookFold.matches) {
        return 320;
      }
      else if (windowIpadPro.matches) {
        return 400;
      }
    }

    return this.getWindwoSize();
  }

  getWindwoSize() {
    let window1200x750px = window.matchMedia('(max-width: 1200px) and (max-height: 750px)')
    let window1550x750px = window.matchMedia('(max-width: 1550px) and (max-height: 750px)')
    let window750x750px = window.matchMedia('(max-width: 750px) and (max-height: 750px)')
    let window1800x1000px = window.matchMedia('(max-width: 1800px) and (max-height: 1000px)')
    let window2000x1000px = window.matchMedia('(max-width: 2000px) and (max-height: 1000px)')
    let window2100x1000px = window.matchMedia('(max-width: 2100px) and (max-height: 1000px)')
    let window2400x1200px = window.matchMedia('(max-width: 2400px) and (max-height: 1200px)')
    let window550x1300px = window.matchMedia('(max-width: 550px) and (min-height: 1300px)')
    let window750x1300px = window.matchMedia('(max-width: 750px) and (min-height: 1300px)')
    let window1200x1300px = window.matchMedia('(max-width: 1200px) and (min-height: 1300px)')
    let window2600x1300px = window.matchMedia('(max-width: 2600px) and (min-height: 1300px)')
    let window2900x1300px = window.matchMedia('(max-width: 2900px) and (min-height: 1300px)')
    let window3200x1300px = window.matchMedia('(max-width: 3200px) and (min-height: 1300px)')
    let window3500x1300px = window.matchMedia('(max-width: 3500px) and (min-height: 1300px)')
    let window3900x1300px = window.matchMedia('(max-width: 3900px) and (min-height: 1300px)')
    let window5200x1300px = window.matchMedia('(max-width: 5200px) and (min-height: 1300px)')

    if (window750x750px.matches) {
      return -40;
    }
    else if (window1200x750px.matches) {
      return 48;
    }
    else if (window1550x750px.matches) {
      return 80;
    }
    else if (window1800x1000px.matches) {
      return 112;
    }
    else if (window2000x1000px.matches) {
      return 180;
    }
    else if (window2100x1000px.matches) {
      return 210;
    }
    else if (window2400x1200px.matches) {
      return 300;
    }
    else if (window550x1300px.matches) {
      return -32;
    }
    else if (window750x1300px.matches) {
      return 200;
    }
    else if (window1200x1300px.matches) {
      return 360;
    }
    else if (window2600x1300px.matches) {
      return 480;
    }
    else if (window2900x1300px.matches) {
      return 560;
    }
    else if (window3200x1300px.matches) {
      return 680;
    }
    else if (window3500x1300px.matches) {
      return 760;
    }
    else if (window3900x1300px.matches) {
      return 920;
    }
    else if (window5200x1300px.matches) {
      return 1450;
    }

    return 0;
  }
}