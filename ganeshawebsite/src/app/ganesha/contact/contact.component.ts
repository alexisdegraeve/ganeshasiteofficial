import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importez HttpClient
import { CommonModule } from '@angular/common';
import emailjs  from '@emailjs/browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  remainingCharacters = 500;
  isSubmitted = false;
  isLoadingAlexis = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private translate: TranslateService, private languageService: LanguageService) { // Injectez HttpClient
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    });
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
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

    // Utilisez EmailJS avec un try-catch pour capturer les erreurs
    try {
      emailjs.init('5MiMPyULOmdyKe92o');
      emailjs.send("service_pvbdhsy", "template_cmgvgtk", {
        from_name: "Ganesha OVH",
        to_name: "Alexis Degraeve",
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      .then(response => {
        console.log('Message sent successfully:', response);
      })
      .catch(error => {
        console.error('Error sending message with EmailJS:', error);
      });
    } catch (error) {
      console.error('Error processing with EmailJS:', error);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.remainingCharacters = 500;
    this.isSubmitted = false;
  }

  onImageLoadAlexis() {
    this.isLoadingAlexis = false; // L'image est complètement chargée
  }
}
