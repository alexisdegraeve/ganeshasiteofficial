import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-adobe-illustrator',
  templateUrl: './adobe-illustrator.component.html',
  styleUrl: './adobe-illustrator.component.scss',
  imports: [CommonModule]
})
export class AdobeIllustratorComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/illustrator/icones_dark_light.svg', alt: 'Logos Light Mode / Dark Mode' },
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
