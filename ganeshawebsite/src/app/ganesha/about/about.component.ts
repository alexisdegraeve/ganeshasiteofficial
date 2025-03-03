import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [CommonModule, TranslateModule]
})
export class AboutComponent {

  languages = [
    { name: 'ABOUT.french', level: 'ABOUT.native', stars: 5 },
    { name: 'ABOUT.english', level: 'C1', stars: 4 },
    { name: 'ABOUT.dutch', level: 'B2.3', stars: 3 },
    { name: 'ABOUT.spanish', level: 'A1', stars: 1 },
  ];
  imageLoaded: boolean = false;

  onImageLoad(event: Event): void {
    this.imageLoaded = true; // Passe l'état à true une fois l'image chargée
  }

      constructor(private translate: TranslateService, private languageService: LanguageService) {
        this.languageService.currentLang$.subscribe((lang) => {
          this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
        });
      }

}
