import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [CommonModule]
})
export class AboutComponent {

  languages = [
    { name: 'French', level: 'Native', stars: 5 },
    { name: 'English', level: 'C1', stars: 4 },
    { name: 'Dutch', level: 'B2.3', stars: 3 },
    { name: 'Spanish', level: 'A1', stars: 1 },
  ];
  imageLoaded: boolean = false;

  onImageLoad(event: Event): void {
    this.imageLoaded = true; // Passe l'état à true une fois l'image chargée
  }
}
