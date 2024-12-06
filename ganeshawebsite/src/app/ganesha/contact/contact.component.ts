
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports:[ReactiveFormsModule],
})
export class ContactComponent {
  contactForm: FormGroup;
  remainingCharacters = 500;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  updateCharacterCount(): void {
    const message = this.contactForm.get('message')?.value || '';
    this.remainingCharacters = 500 - message.length;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Simulation de l'appel API
      console.log('Form submitted', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
      this.remainingCharacters = 500;
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
