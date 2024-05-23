import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  notMainContent: boolean = false;

  lastHighlightedElement: any = {
    firstElement: undefined,
    lastElement: undefined
  };

  constructor() {
    let getPath = window.location.href.split('/')[3];

    if (getPath == 'privacy-policy' || getPath == 'imprint') {
      this.notMainContent = true;
    }
  }

  isClicked(event: any) {
    document.addEventListener('wheel', () => {
      this.removeHighlighting();
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
}
