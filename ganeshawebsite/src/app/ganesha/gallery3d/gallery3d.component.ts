import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-gallery3d',
  templateUrl: './gallery3d.component.html',
  styleUrl: './gallery3d.component.scss',
  imports: [CommonModule]
})
export class Gallery3dComponent {
  selectedTab = 0;
  selectedImage: { img: string; alt: string; url?: string} | null = null;

  archGallery = [
    {
      title: 'MotorCycle Modelling',
      images: [
        { img: 'assets/img/3d/moto/wip_moto01b.jpg', alt: 'WIP MotorCycle - Modelling' },
        { img: 'assets/img/3d/moto/wip_moto08.jpg', alt: 'WIP MotorCycle - Grey Level' },
        { img: 'assets/img/3d/moto/wip_moto09.jpg', alt: 'WIP MotorCycle - Final' },
      ]
    },
    {
      title: 'Interior Rendering Techniques',
      images: [
        { img: 'assets/img/3d/room/render_interior_01.png', alt: 'Interior Rendering Techniques - Light' },
        { img: 'assets/img/3d/room/render_interior_02.png', alt: 'Interior Rendering Techniques - Final' },
      ]
    }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openImageInModal(image: { img: string; alt: string; url?: string }) {
    this.selectedImage = image;

    // Bootstrap modal logic
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
