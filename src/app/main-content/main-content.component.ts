import {Component, inject, QueryList, ViewChildren} from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {LanguageService} from "../language.service";
import { globalLanguage } from '../../main';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  languagelistdata = inject(LanguageService);
  currentLanguage: string = 'german';

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  getLanguage() {
    return globalLanguage;
  }
}
