import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  languages = [
    { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
    { name: 'Python', level: 85, icon: 'fab fa-python' },
    { name: 'Java', level: 88, icon: 'fab fa-java' },
    { name: 'C++', level: 80, icon: 'fas fa-code' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'SQL', level: 82, icon: 'fas fa-database' }
  ];

  technologies = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
    { name: 'Bootstrap', level: 88, icon: 'fab fa-bootstrap' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' }
  ];

  databases = [
    { name: 'MySQL', level: 85, icon: 'fas fa-database' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-leaf' },
    { name: 'PostgreSQL', level: 70, icon: 'fas fa-database' }
  ];

  tools = [
    { name: 'VS Code', level: 95, icon: 'fas fa-code' },
    { name: 'Arduino IDE', level: 85, icon: 'fas fa-microchip' },
    { name: 'Postman', level: 80, icon: 'fas fa-paper-plane' },
    { name: 'Figma', level: 75, icon: 'fab fa-figma' }
  ];

  softSkills = [
    'Communication',
    'Team Work',
    'Critical Thinking',
    'Problem Solving',
    'Leadership Skills',
    'Time Management'
  ];

}
