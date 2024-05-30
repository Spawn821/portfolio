import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  ngOnInit(): void{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

}
