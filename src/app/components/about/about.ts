import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  title = "About Section";
    education = [
    {
      institution: 'Sreenidhi Institute of Science and Technology',
      degree: 'B.Tech in Computer Science Engineering-IoT',
      period: '2022 - 2025',
      cgpa: 'CGPA: 9.3'
    },
    {
      institution: 'Govt. Institute of Electronics',
      degree: 'Diploma in ECE',
      period: '2019 - 2022',
      cgpa: 'CGPA: 9.7'
    },
    {
      institution: 'T.S. Residential School (G), Wyra',
      degree: 'SSC',
      period: '2019',
      cgpa: 'CGPA: 9.3'
    }
  ];

  certifications = [
    'Programming in Java from NPTEL',
    'AI-ML Certification from AWS',
    'Cloud Virtual Internship Certification from AICTE',
    'Web Development Certification from Bharat Intern',
    'SQL Certification from Great Learning Academy'
  ];


}
