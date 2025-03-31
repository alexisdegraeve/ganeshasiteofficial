import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected darkTheme: boolean = true;
  currentLang: string = 'en';
  translationsLoaded = false;


  menuItems = [
    {
      url: '/welcome',  // Chemin vers la page d'accueil
      icon: 'bi-house-door',
      title: 'MENU.home',
      description: 'MENU.home-description',
      visibleOn: 'both'  // 'both' signifie visible sur desktop et mobile
    },
    {
      url: '/artist',  // Chemin vers la page d'accueil
      icon: 'bi-easel-fill',
      title: 'MENU.artist',
      description: 'MENU.artist-description',
      visibleOn: 'both'  // 'both' signifie visible sur desktop et mobile
    },
    {
      url: '/portfolio',  // Chemin vers la page portfolio
      icon: 'bi-briefcase',
      title: 'MENU.portfolio',
      description: 'MENU.portfolio-description',
      visibleOn: 'both'
    },
    {
      url: '/about',  // Chemin vers la page about
      icon: 'bi-person',
      title: 'MENU.about',
      description: 'MENU.about-description',
      visibleOn: 'both'
    },
    {
      url: '/contact',  // Chemin vers la page contact
      icon: 'bi-envelope',
      title: 'MENU.contact',
      description: 'MENU.contact-description',
      visibleOn: 'both'
    }
  ];

  constructor(private themeService: ThemeService, private languageService: LanguageService, private translate: TranslateService) {  // Injectez le router et le ThemeService
    this.themeService.darkThemeSource$.subscribe((theme) => {
      this.darkTheme = theme;
    });
    this.languageService.currentLang$.subscribe((lang) => {
      this.translationsLoaded = false;
      this.currentLang = lang;
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
    });

    this.translate.get('MENU.home').subscribe(() => {
      this.translationsLoaded = true;
    });

    this.translate.onLangChange.subscribe(() => {
      this.translationsLoaded = true;
    });

  }

  // Changer de langue
  switchLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }


  switchTheme() {
    this.themeService.toggleDarkTheme();
  }

}
