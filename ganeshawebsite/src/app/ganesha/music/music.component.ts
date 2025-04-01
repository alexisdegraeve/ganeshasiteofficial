import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-music',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  translationsLoaded = false;
  currentLang: string = 'en';


  musicData = [
    {
      icon: 'fa-brands fa-instagram',
      title: 'MUSIC.insta',
      description: 'MUSIC.resume-insta',
      class: 'instagram',
      href: 'https://www.instagram.com/alexisdegraeve/'
    },
    {
      icon: 'fa-brands fa-youtube', // Exemple d'icône FontAwesome
      title: 'MUSIC.youtube',
      description: 'MUSIC.resume-youtube',
      class: 'youtube',
      href: 'https://www.youtube.com/@ganeshamusicme657'
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
