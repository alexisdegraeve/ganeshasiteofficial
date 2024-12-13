import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importez HttpClient
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  remainingCharacters = 500;
  isSubmitted = false;
  private serverUrl = 'https://ganesha.ovh/contact-form/send.php';

  constructor(private fb: FormBuilder, private http: HttpClient) { // Injectez HttpClient
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    });
  }

  updateCharacterCount(): void {
    const message = this.contactForm.get('message')?.value || '';
    this.remainingCharacters = 500 - message.length;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Simuler un appel API avec un délai
      setTimeout(() => {
        this.isSubmitted = true;
        // Remplacez l'appel par HttpClient.post() pour envoyer les données
        this.sendContactForm();
      }, 1000);
    }
  }

  sendContactForm(): void {
    const formData = {
      firstName: this.contactForm.get('firstName')?.value,
      lastName: this.contactForm.get('lastName')?.value,
      email: this.contactForm.get('email')?.value,
      subject: this.contactForm.get('subject')?.value,
      message: this.contactForm.get('message')?.value,
    };

    this.http.post(this.serverUrl, formData).subscribe(
      response => {
        console.log('Message envoyé avec succès:', response);
      },
      error => {
        console.error('Erreur lors de l\'envoi du message:', error);
      }
    );
  }

  resetForm(): void {
    this.contactForm.reset();
    this.remainingCharacters = 500;
    this.isSubmitted = false;
  }
}
