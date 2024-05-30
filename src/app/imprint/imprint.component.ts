import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  ngOnInit(): void{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

}
