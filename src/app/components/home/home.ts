import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // typedText = '';
  // roles = ['Computer Science Student', 'Web Developer', 'IoT Enthusiast', 'Problem Solver'];
  // currentRoleIndex = 0;
  
  // ngOnInit() {
  //   this.typeWriter();
  // }
  
  // typeWriter() {
  //   const currentRole = this.roles[this.currentRoleIndex];
  //   let charIndex = 0;
    
  //   const type = () => {
  //     if (charIndex < currentRole.length) {
  //       this.typedText += currentRole.charAt(charIndex);
  //       charIndex++;
  //       setTimeout(type, 100);
  //     } else {
  //       setTimeout(() => {
  //         this.eraseText();
  //       }, 2000);
  //     }
  //   };
    
  //   type();
  // }
  
  // eraseText() {
  //   const erase = () => {
  //     if (this.typedText.length > 0) {
  //       this.typedText = this.typedText.slice(0, -1);
  //       setTimeout(erase, 50);
  //     } else {
  //       this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
  //       setTimeout(() => this.typeWriter(), 500);
  //     }
  //   };
    
  //   erase();
  // }

}