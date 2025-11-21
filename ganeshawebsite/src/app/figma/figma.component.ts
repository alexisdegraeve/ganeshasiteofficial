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
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/plank_logos_adg.png', img: 'assets/img/plank_logos_adg.png', alt: 'INDESIGN.alt-poster-games', width: 15 },
        { url: 'assets/img/plank_logos_2_adg.png', img: 'assets/img/plank_logos_2_adg.png', alt: 'INDESIGN.alt-poster-games', width: 15 },
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
