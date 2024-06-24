import {Component, Input} from '@angular/core';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  @Input() languageList: any;
  @Input() currentLanguage: string = '';

  constructor() {
    window.addEventListener('scroll', () => {
      animationScroll('scale-small', 'scale-normal');
      animationScroll('hidden-right', 'show-right');
    })
  }


  ngOnInit(): void {
    animationScroll('scale-small', 'scale-normal');
    animationScroll('hidden-right', 'show-right');
  }
}
