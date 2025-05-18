import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-adobe-in-design',
  templateUrl: './adobe-in-design.component.html',
  styleUrl: './adobe-in-design.component.scss',
  imports: [CommonModule, TranslateModule]
})
export class AdobeInDesignComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/pdf/alexis_video_poster.pdf', pdf: 'assets/pdf/jeux_video_poster.pdf', alt: 'Poster Games' },
        { url: 'assets/pdf/alexis_games_flyer.pdf', pdf: 'assets/pdf/games_flyer.pdf', alt: 'Flyer Games' },
        { url: 'assets/pdf/alexis_magazine_voyage_05.pdf', pdf: 'assets/pdf/magazine_voyage.pdf', alt: 'Travel Magazine' },
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
