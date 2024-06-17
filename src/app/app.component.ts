import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import {AboveTheFoldComponent} from "./main-content/above-the-fold/above-the-fold.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        AboveTheFoldComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
