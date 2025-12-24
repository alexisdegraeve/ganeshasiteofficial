import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent]
})
export class GamesComponent {
  games = [
     {
      title: 'GAMES.GanopolyDeal.title',  // Clé de traduction
      description: 'GAMES.GanopolyDeal.description',  // Clé de traduction
      image: 'assets/img/logo-ganopoly-deal.svg',
      class: 'ganopolydeal',
      playUrl: 'https://www.ganopolydeal.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganopolydeal',
      imageLoaded: false
     },
     {
      title: 'GAMES.GaneshaBattlefield.title',  // Clé de traduction
      description: 'GAMES.GaneshaBattlefield.description',  // Clé de traduction
      image: 'assets/img/ganesha_battleship.png',
      class: 'battlefield',
      playUrl: 'https://www.battleship.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshabattleship',
      imageLoaded: false
    },
    {
      title: 'GAMES.GaneshaSudoku.title',  // Clé de traduction
      description: 'GAMES.GaneshaSudoku.description',  // Clé de traduction
      image: 'assets/img/ganesha_sudoku.png',
      playUrl: 'https://sudoku.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshasudoku',
      imageLoaded: false
    },
    {
      title: 'GAMES.GaneshaFour.title',  // Clé de traduction
      description: 'GAMES.GaneshaFour.description',  // Clé de traduction
      image: 'assets/img/ganesha_four.png',
      playUrl: 'https://connectfour.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshafour',
      imageLoaded: false
    },
    {
      title: 'GAMES.GaneshaOxo.title',  // Clé de traduction
      description: 'GAMES.GaneshaOxo.description',  // Clé de traduction
      image: 'assets/img/ganeshaoxo.png',
      playUrl: 'https://oxo.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshaoxo',
      imageLoaded: false
    },
    {
      title: 'GAMES.LangCards.title',  // Clé de traduction
      description: 'GAMES.LangCards.description',  // Clé de traduction
      image: 'assets/img/ganesha_lang_cards.png',
      playUrl: 'http://www.langcards.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshalangcards',
      imageLoaded: false
    },
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
      image: 'assets/img/qpuc.png',
      playUrl: 'https://www.qpuc.ganesha.ovh/',
      githubUrl: 'https://github.com/alexisdegraeve/ganeshquestion',
      imageLoaded: false
    },
    {
      title: 'GAMES.EscapeGame.title',  // Clé de traduction
      description: 'GAMES.EscapeGame.description',  // Clé de traduction
      image: 'assets/img/escapegame_mario.png',
      playUrl: 'https://chatboteg.ganesha.ovh/',
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
