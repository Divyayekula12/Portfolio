import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Reachbe - Healthcare Solution',
      description: 'A comprehensive healthcare platform addressing underutilization of government healthcare services. Features include connecting patients with government doctors, dispelling myths about hospital conditions, and providing a user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Patient-Doctor Connection System',
        'Healthcare Information Portal',
        'Government Healthcare Integration',
        'Responsive Design'
      ],
      github: 'https://github.com/Divyayekula12',
      demo: '#',
      image: 'fas fa-heartbeat',
      category: 'Web Development'
    },
    {
      title: 'IoT Smart Fish Feeder',
      description: 'An IoT-enabled smart fish feeder that automates feeding by utilizing sensors and a microcontroller to dispense precise food quantities at scheduled intervals, with smartphone app integration for remote monitoring.',
      technologies: ['ESP32', 'Arduino', 'C', 'Blynk App'],
      features: [
        'Automated Feeding Schedule',
        'Remote Monitoring via App',
        'Precise Food Dispensing',
        'Real-time Health Monitoring'
      ],
      github: 'https://github.com/Divyayekula12',
      demo: '#',
      image: 'fas fa-fish',
      category: 'IoT'
    },
    {
      title: 'E-learning Platform',
      description: 'A responsive web application for an e-learning platform using Angular and TypeScript. Features modular, maintainable, and scalable frontend architecture with best practices implementation.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      features: [
        'Course Management System',
        'Interactive Learning Modules',
        'Progress Tracking',
        'Responsive Design'
      ],
      github: 'https://github.com/Divyayekula12',
      demo: '#',
      image: 'fas fa-graduation-cap',
      category: 'Web Development'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular showcasing projects, skills, and experience. Features smooth animations, mobile-first design, and optimized performance.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'CSS3'],
      features: [
        'Responsive Design',
        'Smooth Animations',
        'SEO Optimized',
        'Fast Loading'
      ],
      github: 'https://github.com/Divyayekula12',
      demo: '#',
      image: 'fas fa-globe',
      category: 'Web Development'
    }
  ];

  categories = ['All', 'Web Development', 'IoT'];
  selectedCategory = 'All';

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
