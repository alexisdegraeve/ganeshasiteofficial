import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-adobe-in-design',
  templateUrl: './adobe-in-design.component.html',
  styleUrl: './adobe-in-design.component.scss',
  imports: [CommonModule, TranslateModule, PageHeaderComponent]
})
export class AdobeInDesignComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/preview_poster_jeux_video.jpg', pdf: 'assets/pdf/jeux_video_poster.pdf', alt: 'INDESIGN.alt-poster-games' },
        { url: 'assets/img/preview_flyer_jeux_video.jpg', pdf: 'assets/pdf/games_flyer.pdf', alt: 'INDESIGN.alt-flyer-games' },
        { url: 'assets/img/preview_magazine_voyage.jpg', pdf: 'assets/pdf/magazine_voyage.pdf', alt: 'INDESIGN.alt-magazine-travel' },
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
