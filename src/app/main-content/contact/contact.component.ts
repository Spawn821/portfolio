import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);
  checkboxState = false;
  sendComplete = false;
  contactName: string = '';

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  post = {
    endPoint: 'https://stephan-schmidt-web-developer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text'
      }
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.contactName = this.contactData.name;

      this.sendPost(ngForm);
      this.sendComplete = true;

      setTimeout(() => this.sendComplete = false, 9500);
    }
  }

  sendPost(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          console.log(this.contactData);
          ngForm.resetForm();
          this.checkboxState = false;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('Send post complete')
      });
  }

  isChecked(event: any) {
    if (event.target.checked) {
      this.checkboxState = true;
    } else {
      this.checkboxState = false;
    }
  }

  getCheckboxState() {
    return this.checkboxState;
  }

  goUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}