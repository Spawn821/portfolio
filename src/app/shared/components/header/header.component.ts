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
    let btnDE = document.getElementById('language-DE');
    let btnEN = document.getElementById('language-EN');

    if (event.target.innerHTML === "DE") {
      btnEN ? btnEN.classList.remove('highlightingText') : null;
      btnEN ? btnEN.classList.remove('language-frame') : null;
      btnDE ? btnDE.classList.add('highlightingText') : null;
      btnDE ? btnDE.classList.add('language-frame') : null;
    } else {
      btnEN ? btnEN.classList.add('highlightingText') : null;
      btnEN ? btnEN.classList.add('language-frame') : null;
      btnDE ? btnDE.classList.remove('highlightingText') : null;
      btnDE ? btnDE.classList.remove('language-frame') : null;
    }
  }

  changeLanguage(language: string) {
    this.newCurrentLanguage.emit(language);
  }
}
