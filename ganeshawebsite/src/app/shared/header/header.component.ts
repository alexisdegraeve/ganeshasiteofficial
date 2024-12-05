import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule]
})
export class HeaderComponent {
  protected darkTheme: boolean = false;

  menuItems = [
    {
      url: '#',
      icon: 'bi-house-door',
      title: 'Home',
      description: 'Explore our home page',
      visibleOn: 'both'  // 'both' means visible on both desktop and mobile
    },
    {
      url: '#',
      icon: 'bi-briefcase',
      title: 'Portfolio',
      description: 'Check our amazing projects',
      visibleOn: 'both'
    },
    {
      url: '#',
      icon: 'bi-person',
      title: 'About',
      description: 'Learn more about us',
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
