import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export function animationScroll(hidden: string, show: string) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(show);
      }
    });
  });


  const hiddenElements = document.querySelectorAll(`.${hidden}`);
  hiddenElements.forEach((el) => observer.observe(el));
}
