import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

@Component({
  selector: 'app-designer',
  imports: [CommonModule, TranslateModule, PageHeaderComponent],
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss'
})
export class DesignerComponent {
  translationsLoaded = false;
  currentLang: string = 'en';


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
