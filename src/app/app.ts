import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterLink, CommonModule],
  styleUrl: './app.css'
})
export class App {
 title = 'Divya Yekula Portfolio';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
