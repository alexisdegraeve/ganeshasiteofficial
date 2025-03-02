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
  figures: any[] = [];

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe( dark =>
      this.darkTheme = dark
    );
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 11, 1); // 1er décembre
    const endDate = new Date(currentDate.getFullYear() + 1, 0, 10); // 10 janvier
    this.isWinterSeason = (currentDate >= startDate && currentDate <= endDate);
    for (let i = 0; i < 50; i++) {
      this.figures.push(this.generateFigure());
    }
  }
  generateFigure() {
    // Taille aléatoire entre 30px et 70px
    const size = Math.random() * (150 - 50) + 50;
    // Position aléatoire sur l'axe X entre 0% et 100%
    const left = Math.random() * (100 - (size / window.innerWidth * 100));
    // Vitesse de la chute (animation) entre 10s et 20s
    const animationDuration = Math.random() * (20 - 6) + 6;

    return {
      style: {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
      },
      size
    };
  }
}
