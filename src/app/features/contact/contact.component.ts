import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup; 
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false; // Nouvelle variable pour le loader

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+\d{1,3}\s?\d{6,14}$/)]],
      message: ['', Validators.required]
    });
  }

  sendEmail(event: Event) {
    event.preventDefault();

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true; // Active le loader

    const serviceID = 'service_axwqb9g';
    const templateID = 'template_y45lrgw';
    const publicKey = 'Fv4BCV-SzaTC-kGtS';

    const templateParams = this.contactForm.value;

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log('Email envoyé avec succès !', response.status, response.text);
        this.showNotification('success', 'Votre message a bien été envoyé !');
        this.contactForm.reset();
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        this.showNotification('error', 'Une erreur s\'est produite. Veuillez réessayer.');
      })
      .finally(() => {
        this.isLoading = false; 
      });
  }

  showNotification(type: 'success' | 'error', message: string) {
    if (type === 'success') {
      this.successMessage = message;
      this.errorMessage = '';
    } else {
      this.errorMessage = message;
      this.successMessage = '';
    }

    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000); 
  }
}
