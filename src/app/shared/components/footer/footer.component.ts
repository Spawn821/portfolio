import { Component, EventEmitter, Output  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Output() isImprint = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  callImprint() {
    this.isImprint.emit(true);

    console.log('Footer component ', true);
  }

  test() {
    this.router.navigateByUrl('imprint');
  }
}
