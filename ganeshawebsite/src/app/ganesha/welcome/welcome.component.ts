import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Rellax from 'rellax';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [CommonModule, TranslateModule],
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  private rellax!: any;
  clouds: any[] = [];
  imageLoaded = false;
  totalImages = 0;
  loadedImages = 0;

  constructor(private el: ElementRef, private translate: TranslateService, private languageService: LanguageService ) {
    for (let i = 0; i < 30; i++) {
      this.clouds.push(this.generateCloud());
    }
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
    });
  }

  ngAfterViewInit() {
    this.rellax = new Rellax('.cloud', { speed: -3 });
  }

  ngOnInit() {
    this.totalImages = this.clouds.length;
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

  onImageLoad() {
    this.loadedImages++;
    // Si toutes les images sont chargées
    if (this.loadedImages === this.totalImages) {
      this.imageLoaded = true;  // Toutes les images sont chargées
    }
  }

}
