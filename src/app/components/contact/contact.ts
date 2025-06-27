import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'yekuladivya8@gmail.com',
      link: 'mailto:yekuladivya8@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 7001037887',
      link: 'tel:+917001037887'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'divya-yekula-05800126b',
      link: 'https://linkedin.com/in/divya-yekula-05800126b/'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'Divyayekula12',
      link: 'https://github.com/Divyayekula12'
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}
