import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() imprint!: boolean;

  lastHighlightedElement: any = {
    firstElement: undefined,
    lastElement: undefined
  };

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
