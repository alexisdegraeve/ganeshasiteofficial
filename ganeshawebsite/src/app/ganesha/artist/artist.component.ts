import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import Rellax from 'rellax';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  imports: [CommonModule],
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  private rellax!: any;
  clouds: any[] = [];

  constructor(private el: ElementRef) {
    for (let i = 0; i < 30; i++) {
      this.clouds.push(this.generateCloud());
    }
  }

  ngAfterViewInit() {
    this.rellax = new Rellax('.cloud', { speed: -3 });
  }

  generateCloud() {
    // Taille aléatoire entre 50px et 300px
    const size = Math.random() * (300 - 50) + 50;
    // Position aléatoire sur l'axe Y entre 0% et 100%
    const top = Math.random() * 100;
    // Position aléatoire sur l'axe X entre 0% et 100%
    const left = Math.random() * 100;
    // Vitesse de défilement entre -2 et -5 pour des mouvements lents
    const speed = Math.random() * (-5 + 2) + 2;

    return {
      style: {
        top: `${top}%`,
        left: `${left}%`,
      },
      size,
      speed
    };
  }

}
