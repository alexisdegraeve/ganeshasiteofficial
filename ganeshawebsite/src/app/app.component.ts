import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ganeshawebsite';

  darkTheme  = false;

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe( dark =>
      this.darkTheme = dark
    );
  }
}
