import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  figures: any[] = [];
  param = {value: 'world'};
  currentLang: string = 'en';

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    for (let i = 0; i < 50; i++) {
      this.figures.push(this.generateFigure());
    }
    this.languageService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
      console.log('change language welcome ', lang)
    });
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
