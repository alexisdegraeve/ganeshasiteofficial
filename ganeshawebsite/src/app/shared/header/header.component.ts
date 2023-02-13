import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkTheme  = false;

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
