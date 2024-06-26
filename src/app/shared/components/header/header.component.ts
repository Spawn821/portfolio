import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() imprint!: boolean;
  windowSize: MediaQueryList = window.matchMedia('(max-width: 950px)');
  showBurgerMenu: boolean = false;

  @Output() newCurrentLanguage: EventEmitter<string> = new EventEmitter<string>();
  @Input() currentLanguage: string = '';
  @Input() languageList: any;

  lastHighlightedElement: any = {
    firstElement: undefined,
    lastElement: undefined
  };

  constructor() {
    window.addEventListener('resize', () => {
      this.windowSize = window.matchMedia('(max-width: 950px)')
    })
  }

  ngOnInit() {
    this.newCurrentLanguage.emit('german');
  }

  openBurgerMenu(action: string): void {
    if (action === 'open' && !this.showBurgerMenu) {
      this.showBurgerMenu = true;
    } else {
      this.showBurgerMenu = false;
    }
  }

  isClicked(event: any) {
    document.addEventListener('wheel', () => {
      if (event.target.innerHTML !== 'DE' && event.target.innerHTML !== 'EN') {
        this.removeHighlighting();
      }
    });

    if (this.lastHighlightedElement.firstElement) {
        this.removeHighlighting();
    }

    this.lastHighlightedElement.firstElement = event.target;
    this.lastHighlightedElement.lastElement = event.target.nextElementSibling;

    event.target.classList.add('highlightingText');
    event.target.nextElementSibling.classList.remove('v-hidden');
  }

  removeHighlighting() {
    this.lastHighlightedElement.firstElement.classList.remove('highlightingText');
    this.lastHighlightedElement.lastElement.classList.add('v-hidden');
  }

  addLanguage(event: any) {
    let btnDE = document.querySelectorAll('#language-DE');
    let btnEN = document.querySelectorAll('#language-EN');

    if (event.target.id === "language-DE") {
      btnEN.forEach(el => {
        el.classList.remove('highlightingText');
        el.classList.remove('language-frame');
      })
      btnDE.forEach(el => {
        el.classList.add('highlightingText');
        el.classList.add('language-frame');
      })
    } else {
      btnEN.forEach(el => {
        el.classList.add('highlightingText');
        el.classList.add('language-frame');
      })
      btnDE.forEach(el => {
        el.classList.remove('highlightingText');
        el.classList.remove('language-frame');
      })
    }
  }

  changeLanguage(language: string) {
    this.newCurrentLanguage.emit(language);
  }
}
