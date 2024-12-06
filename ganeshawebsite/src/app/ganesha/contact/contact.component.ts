import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  remainingCharacters = 500;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
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
      }, 1000);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.remainingCharacters = 500;
    this.isSubmitted = false;
  }
}
