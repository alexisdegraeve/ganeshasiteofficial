import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
        { url: 'assets/flatA1.jpg', alt: 'Flat A 1' },
        { url: 'assets/flatA2.jpg', alt: 'Flat A 2' }
      ]
    },
    {
      title: 'Flat B',
      images: [
        { url: 'assets/flatB1.jpg', alt: 'Flat B 1' },
        { url: 'assets/flatB2.jpg', alt: 'Flat B 2' },
        { url: 'assets/flatB3.jpg', alt: 'Flat B 3' }
      ]
    }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openImageInModal(image: { url: string; alt: string }) {
    this.selectedImage = image;
    // const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    // modal.show();
  }
}
