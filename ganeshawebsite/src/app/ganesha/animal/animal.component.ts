import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-animal',
  imports: [CommonModule, TranslateModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent {
  translationsLoaded = false;
  currentLang: string = 'en';

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    this.translationsLoaded = false;
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

  }
}
