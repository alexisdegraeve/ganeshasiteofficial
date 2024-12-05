import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  protected darkTheme: boolean = false;

  menuItems = [
    {
      url: '/welcome',  // Chemin vers la page d'accueil
      icon: 'bi-house-door',
      title: 'Home',
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

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe( dark =>
      this.darkTheme = dark
    );
  }

  switchTheme() {
    this.themeService.setDarkTheme(!this.darkTheme) ;
    this.themeService.toggleDarkTheme();
  }

}
