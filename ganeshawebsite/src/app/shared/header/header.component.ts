import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected darkTheme: boolean = true;
  currentLang: string = 'en';


  menuItems = [
    {
      url: '/welcome',  // Chemin vers la page d'accueil
      icon: 'bi-house-door',
      title: 'Home',
      description: 'Explore our home page',
      visibleOn: 'both'  // 'both' signifie visible sur desktop et mobile
    },
    {
      url: '/artist',  // Chemin vers la page d'accueil
      icon: 'bi-easel-fill',
      title: 'Artist',
      description: 'Explore our home page',
      visibleOn: 'both'  // 'both' signifie visible sur desktop et mobile
    },
    {
      url: '/portfolio',  // Chemin vers la page portfolio
      icon: 'bi-briefcase',
      title: 'Portfolio',
      description: 'Check our amazing projects',
      visibleOn: 'both'
    },
    {
      url: '/about',  // Chemin vers la page about
      icon: 'bi-person',
      title: 'About',
      description: 'Learn more about us',
      visibleOn: 'both'
    },
    {
      url: '/contact',  // Chemin vers la page contact
      icon: 'bi-envelope',
      title: 'Contact',
      description: 'Get in touch with us',
      visibleOn: 'both'
    }
  ];

  constructor(private themeService: ThemeService, private languageService: LanguageService) {  // Injectez le router et le ThemeService
    this.themeService.darkThemeSource$.subscribe((theme) => {
      this.darkTheme = theme;
    });
    this.languageService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
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
