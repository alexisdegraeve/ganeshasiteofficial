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
        { url: 'assets/img/illustrator/icones_dark_light.png', alt: 'Logos Light Mode / Dark Mode', class: 'icones_dark_light' },
        { url: 'assets/img/illustrator/cat.svg', alt: 'Logos Light Mode / Dark Mode', class: 'cat' },
        { url: 'assets/img/illustrator/frisko.svg', alt: 'Frisko' },
        { url: 'assets/img/illustrator/texte_city_bread.svg', alt: 'City Bread' },
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
