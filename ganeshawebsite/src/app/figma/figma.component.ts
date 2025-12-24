import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

declare var bootstrap: any; // Pour utiliser Bootstrap JS

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrls: ['./figma.component.scss'],
  imports: [CommonModule, TranslateModule, PageHeaderComponent]
})
export class FigmaComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string; } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/mockups/games/game_ganopolydeal.jpg', img: 'assets/img/mockups/games/game_ganopolydeal.jpg', alt: 'FIGMA.ganopoly-deal'},
        { url: 'assets/img/mockups/games/battlefield_mockups.jpg', img: 'assets/img/mockups/games/battlefield_mockups.jpg', alt: 'FIGMA.ganesha-battlefield'},
        { url: 'assets/img/draw/draw_nick_figma.jpg', img: 'assets/img/draw/raw_nick_figma.jpg', alt: 'FIGMA.nick-wilde', class: 'nick-wilde'},
        { url: 'assets/img/plank_logos_adg.png', img: 'assets/img/plank_logos_adg.png', alt: 'FIGMA.alt-logos',  class: 'logos' },
        { url: 'assets/img/plank_logos_2_adg.png', img: 'assets/img/plank_logos_2_adg.png', alt: 'FIGMA.alt-logos', class: 'logos'  },
      ]
    }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }


openImageInModal(image: { url: string; alt: string }) {
  this.selectedImage = image;

  const modalElement = document.getElementById('galleryModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
}
