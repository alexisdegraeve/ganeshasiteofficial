import { Component } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  darkTheme  = false;
  isWinterSeason = false;

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe( dark =>
      this.darkTheme = dark
    );
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 11, 1); // 1er décembre
    const endDate = new Date(currentDate.getFullYear() + 1, 0, 10); // 10 janvier
    this.isWinterSeason = (currentDate >= startDate && currentDate <= endDate);
  }
}
