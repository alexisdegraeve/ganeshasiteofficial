import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-gallery-logo',
  templateUrl: './gallery-logo.component.html',
  styleUrls: ['./gallery-logo.component.scss'],
  imports: [CommonModule]
})
export class GalleryLogoComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/logos/logo_vigna_2024.svg', alt: 'Vigna 2024' },
        { url: 'assets/img/logos/ganesha_new_logo.svg', alt: 'Ganesha 2024' },
        { url: 'assets/img/logos/container_vigna.svg', alt: 'Icon container Vigna 2024' },
        { url: 'assets/img/logos/cameleon.png', alt: 'Cameleon Logo' },
        { url: 'assets/img/logos/marco_vigna.png', alt: 'Marco Vigna 2000' },
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
