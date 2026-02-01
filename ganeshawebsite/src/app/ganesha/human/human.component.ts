import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

@Component({
  selector: 'app-human',
  imports: [CommonModule, TranslateModule, PageHeaderComponent],
  templateUrl: './human.component.html',
  styleUrl: './human.component.scss'
})
export class HumanComponent {
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
