import {Component, Input} from '@angular/core';
import {animationScroll} from "../../../main";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

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
