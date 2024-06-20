import { Component } from '@angular/core';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor() {
    window.addEventListener('scroll', () => {
      animationScroll('mirror-left', 'mirror-right');
      animationScroll('hidden-right', 'show-right');
    })
  }


  ngOnInit(): void {
    animationScroll('mirror-left', 'mirror-right');
    animationScroll('hidden-left', 'hidden-right');
  }
}
