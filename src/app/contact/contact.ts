import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Header, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  public formData = {
    name: '',
    telegram: '',
    email: '',
    phone: '',
    project: ''
  };
  
  public isSubmitting = false;

  onSubmit() {
    if (!this.isFormValid()) return;
    
    this.isSubmitting = true;
    
    // Здесь отправка через EmailJS или на сервер
    console.log('Form data:', this.formData);
    
    setTimeout(() => {
      this.isSubmitting = false;
      this.resetForm();
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    }, 1000);
  }

  private isFormValid(): boolean {
    return this.formData.name.trim() !== '' && 
           this.formData.email.trim() !== '' && 
           this.formData.project.trim() !== '';
  }

  private resetForm() {
    this.formData = {
      name: '',
      telegram: '',
      email: '',
      phone: '',
      project: ''
    };
  }
}