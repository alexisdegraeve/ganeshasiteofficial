import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RouterModule, CommonModule, TranslateModule, PageHeaderComponent],
})
export class AboutComponent {
  isLoadingAlexis = true; // Etat de chargement de l'image d'Alexis
  isLoading = true; // Etat de chargement du texte (par exemple les langues)
  musicItems = [
    { name: 'Piano', title: 'Imaginarium', link: 'https://imaginarium-asbl.be/index.php/author/anais/' },
    { name: 'Singing', title: 'En avant la musique!', link: 'https://jmomusique.blog/tag/aurore-rinchon/' },
  ];

  cvColors: string[] = [
  '#ff6b6b', // rouge
  '#feca57', // orange
  '#48dbfb', // bleu clair
  '#1dd1a1', // vert
  '#5f27cd'  // violet
];

  musicData = [
    {
      icon: '',
      image: 'assets/preview/unamur_logo.svg',
      title: 'DESIGNER.title-unamur',
      description: 'DESIGNER.resume-unamur',
      class: 'unamur',
      href: 'https://www.unamur.be/fr/info/etudes/info-hd'
    },
    {
      icon: '',
      image: 'assets/preview/escape_game_chatbot_wide.png',
      title: 'DESIGNER.title-chatbot',
      description: 'DESIGNER.resume-chatbot',
      class: 'chatbot',
      href: 'https://researchportal.unamur.be/fr/studentTheses/%C3%A9tude-pr%C3%A9liminaire-pour-lint%C3%A9gration-dun-chatbot-comme-dispenseur'
    },
  ];

  languages = [
    { name: 'ABOUT.french', level: 'ABOUT.native', stars: 5 },
    { name: 'ABOUT.english', level: 'C1', stars: 4 },
    { name: 'ABOUT.dutch', level: 'B3.1', stars: 4 },
    { name: 'ABOUT.spanish', level: 'A1', stars: 1 },
  ];

  onImageLoadAlexis() {
    this.isLoadingAlexis = false; // L'image est complètement chargée
  }

  loadTextData() {
    // Simuler le chargement des données textuelles avec un délai
    setTimeout(() => {
      this.isLoading = false; // Lorsque les données textuelles sont prêtes
    }, 2000); // Délai de 2 secondes pour simuler le chargement des données
  }

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private http: HttpClient
  ) {
    // Mettre à jour la langue dans ngx-translate
    this.languageService.currentLang$.subscribe((lang) => {
      this.isLoading = false;
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
      console.log('change language welcome ', lang)
    });

    this.loadTextData(); // Charger les données textuelles (simuler ici)
  }
}
