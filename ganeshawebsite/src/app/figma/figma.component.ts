import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrl: './figma.component.scss',
  imports: [CommonModule, TranslateModule, PageHeaderComponent]
})
export class FigmaComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/preview_poster_jeux_video.jpg', img: 'assets/pdf/preview_poster_jeux_video.jpg', alt: 'INDESIGN.alt-poster-games', width: 15 },
        { url: 'assets/img/preview_flyer_jeux_video.jpg', img: 'assets/pdf/games_flyer.pdf', alt: 'INDESIGN.alt-flyer-games', width: 10  },
        { url: 'assets/img/preview_magazine_voyage.jpg', img: 'assets/pdf/magazine_voyage.pdf', alt: 'INDESIGN.alt-magazine-travel', width: 15  },
        { url: 'assets/img/indesign/choco_blanc_charte_graphique.png', img: 'assets/pdf/choco_blanc_guidelines.pdf', alt: 'INDESIGN.choco-blanc-brand', width: 15  },
      ]
    }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openImageInModal(image: { url: string; alt: string }) {
    this.selectedImage = image;

    // Bootstrap modal logic
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
