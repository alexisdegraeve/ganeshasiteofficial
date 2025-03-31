import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-artist',
  standalone: false,
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  figures: any[] = [];
  param = {value: 'world'};
  currentLang: string = 'en';
  figuresLoaded = false; // Ajout de l'indicateur de chargement
  translationsLoaded = false;

  cardsData = [
    {
      icon: 'bi bi-brush-fill', // Exemple d'icône FontAwesome
      title: 'ARTIST.title-expert',
      description: 'ARTIST.card1-description'
    },
    {
      icon: 'bi bi-music-note-beamed',
      title: 'ARTIST.title-music',
      description: 'ARTIST.card2-description'
    },
    {
      icon: 'bi bi-heart-fill',
      title: 'ARTIST.title-aboutme',
      description: 'ARTIST.card3-description'
    },
    {
      title: 'ARTIST.title-animal',
      image: 'assets/icons/animal.svg',
      description: 'ARTIST.card4-description'
    },
    {
      title: 'ARTIST.title-human',
      image: 'assets/icons/human.svg',
      description: 'ARTIST.card5-description'
    },
    {
      icon: 'bi bi-envelope-at-fill',
      title: 'ARTIST.title-writetome',
      description: 'ARTIST.card6-description'
    }
  ];



  constructor(private translate: TranslateService, private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.translationsLoaded = false;
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
      console.log('change language welcome ', lang)
    });

    this.translate.get('ARTIST.citation').subscribe(() => {
      this.translationsLoaded = true;
    });


    this.translate.onLangChange.subscribe(() => {
      this.translationsLoaded = true;
    });

    this.loadFigures(); // Charger les figures avec délai
  }

  loadFigures() {
    setTimeout(() => { // Simule un chargement
      for (let i = 0; i < 50; i++) {
        this.figures.push(this.generateFigure());
      }
      this.figuresLoaded = true; // Indique que le chargement est terminé
    }, 1500); // Délai de 1.5s avant d'afficher les figures
  }

  generateFigure() {
    // Taille aléatoire entre 30px et 70px
    const size = Math.random() * (150 - 50) + 50;
    // Position aléatoire sur l'axe X entre 0% et 100%
    const left = Math.random() * (100 - (size / window.innerWidth * 100));
    // Vitesse de la chute (animation) entre 10s et 20s
    const animationDuration = Math.random() * (20 - 6) + 6;

    return {
      style: {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
      },
      size
    };
  }
}
