import {CommonModule} from '@angular/common';
import {Component, Input, SimpleChanges} from '@angular/core';
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

  lastHighlightedElement: any = {
    firstElement: undefined,
    lastElement: undefined
  };

  constructor() {
    window.addEventListener('resize', () => {
      this.windowSize = window.matchMedia('(max-width: 950px)')
    })
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

    debugger;
    if (this.lastHighlightedElement.firstElement) {
      if (this.lastHighlightedElement.firstElement.innerHTML === 'DE' || this.lastHighlightedElement.firstElement.innerHTML === 'EN') {
        console.log(event.target.innerHTML);
        if (!event.target.classList.contains('highlightingText')) {
          this.removeHighlighting();
        }
      }
      if (this.lastHighlightedElement.firstElement.innerHTML !== 'DE' && this.lastHighlightedElement.firstElement.innerHTML !== 'EN') {
        this.removeHighlighting();
      }
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

  isClickedLanguage() {

  }
}
