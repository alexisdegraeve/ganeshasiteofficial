import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class GamesComponent {
  games = [
    {
      title: 'GAMES.Gano.title',  // Clé de traduction
      description: 'GAMES.Gano.description',  // Clé de traduction
      image: 'assets/img/uno-ganesha.png',
      playUrl: 'https://www.gano.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/unoganesha',
      imageLoaded: false
    },
    {
      title: 'GAMES.Champion.title',  // Clé de traduction
      description: 'GAMES.Champion.description',  // Clé de traduction
      image: 'assets/img/qpug-ganesha.jpg',
      playUrl: '',
      githubUrl: '',
      imageLoaded: false
    }
  ];

  // Fonction qui est appelée lorsque l'image est chargée
  onImageLoad(index: number): void {
    this.games[index].imageLoaded = true;
  }

      constructor(private translate: TranslateService, private languageService: LanguageService) {
        this.languageService.currentLang$.subscribe((lang) => {
          this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
        });
      }
}
