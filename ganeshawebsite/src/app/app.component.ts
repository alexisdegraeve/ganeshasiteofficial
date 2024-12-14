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
  darkTheme = false;
  isWinterSeason = false;

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe(dark => {
      this.darkTheme = dark;
    });

    // Vérifiez si la date actuelle est entre le 1er décembre et le 10 janvier
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 11, 1); // 1er décembre
    const endDate = new Date(currentDate.getFullYear() + 1, 0, 10); // 10 janvier
    this.isWinterSeason = (currentDate >= startDate && currentDate <= endDate);
  }
}
