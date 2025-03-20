import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class GamesComponent {
  games = [
    {
      title: 'Gano - Parodie du Uno',
      description: 'Un jeu de cartes amusant, inspiré du Uno, conçu et développé avec Angular.',
      image: 'assets/img/gano_game.jpg',
      playUrl: 'https://lien-vers-le-jeu.com',
      githubUrl: 'https://github.com/monrepo/gano',
      imageLoaded: false
    },
    {
      title: 'Champion - En préparation',
      description: 'Un jeu de type compétition, inspiré des meilleurs jeux de cartes, en cours de développement.',
      image: 'assets/img/champion_game.jpg',
      playUrl: 'https://lien-vers-le-jeu.com',
      githubUrl: 'https://github.com/monrepo/champion',
      imageLoaded: false
    }
  ];

  // Fonction qui est appelée lorsque l'image est chargée
  onImageLoad(index: number): void {
    this.games[index].imageLoaded = true;
  }
}
