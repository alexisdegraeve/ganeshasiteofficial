import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, TranslateModule],
})
export class AboutComponent {
  isLoadingAlexis = true; // Etat de chargement de l'image d'Alexis
  isLoading = true; // Etat de chargement du texte (par exemple les langues)
  musicItems = [
    { name: 'Piano', title: 'Imaginarium', link: 'https://imaginarium-asbl.be/index.php/author/anais/' },
    { name: 'Singing', title: 'En avant la musique!', link: 'https://jmomusique.blog/tag/aurore-rinchon/' },
  ];

  languages = [
    { name: 'ABOUT.french', level: 'ABOUT.native', stars: 5 },
    { name: 'ABOUT.english', level: 'C1', stars: 4 },
    { name: 'ABOUT.dutch', level: 'B2.3', stars: 3 },
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
    private languageService: LanguageService
  ) {
    // Mettre à jour la langue dans ngx-translate
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
    });

    this.loadTextData(); // Charger les données textuelles (simuler ici)
  }
}
