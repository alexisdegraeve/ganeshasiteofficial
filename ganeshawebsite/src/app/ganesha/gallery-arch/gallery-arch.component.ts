import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-gallery-arch',
  templateUrl: './gallery-arch.component.html',
  styleUrls: ['./gallery-arch.component.scss'],
  imports: [CommonModule]
})
export class GalleryArchComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Outside View',
      images: [
        { url: 'assets/img/outside/flat_01.jpg', alt: 'Outside View 1' },
        { url: 'assets/img/outside/flat_02.jpg', alt: 'Outside View 2' },
      ]
    },
    {
      title: 'Flat A',
      images: [
        { url: 'assets/img/flata/flat_04.jpg', alt: 'Flat A' },
        { url: 'assets/img/flata/flat_05.jpg', alt: 'Flat A' },
        { url: 'assets/img/flata/flat_06.jpg', alt: 'Flat A' },
        { url: 'assets/img/flata/flat_07.jpg', alt: 'Flat A' },
      ]
    },
    {
      title: 'Flat B',
      images: [
        { url: 'assets/img/flatb/flat_08.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_09.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_10.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_11.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_12.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_13.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_14.jpg', alt: 'Flat B' },
        { url: 'assets/img/flatb/flat_15.jpg', alt: 'Flat B' },
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
