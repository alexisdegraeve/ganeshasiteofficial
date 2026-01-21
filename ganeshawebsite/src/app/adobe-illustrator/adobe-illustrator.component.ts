import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { TranslateModule } from '@ngx-translate/core';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-adobe-illustrator',
  templateUrl: './adobe-illustrator.component.html',
  styleUrl: './adobe-illustrator.component.scss',
  imports: [CommonModule, PageHeaderComponent, TranslateModule]
})
export class AdobeIllustratorComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string; class: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/illustrator/icones_dark_light.png', alt: 'Icons for light and dark mode, created in vector format using Pathfinder and the Shape Builder Tool.', class: 'icones_dark_light' },
        { url: 'assets/img/illustrator/icones_plank.svg', alt: 'A set of plank icons created in vector format using Illustrator’s Pathfinder and Shape Builder tools', class: 'icones_plank' },
        { url: 'assets/img/illustrator/elephant.png', alt: 'Wireframe-style elephant illustration created using Illustrator\’s Blend Tool. In the style of Andrea Minini.', class: 'elephant' },
        { url: 'assets/img/illustrator/flamingos.png', alt: 'Wireframe-style flamingos illustration created using Illustrator\’s Blend Tool. In the style of Andrea Minini.', class: 'flamingos' },
        { url: 'assets/img/illustrator/cat.svg', alt: 'Wireframe-style cat illustration created using Illustrator\’s Blend Tool. In the style of Andrea Minini.', class: 'cat' },
        { url: 'assets/img/illustrator/cat_stand.png', alt: 'Wireframe-style cat illustration created using Illustrator\’s Blend Tool. In the style of Andrea Minini.', class: 'cat-stand' },
        { url: 'assets/img/illustrator/cat_face.png', alt: 'Wireframe-style cat illustration created using Illustrator\’s Blend Tool. In the style of Andrea Minini.', class: 'cat-face' },
        { url: 'assets/img/illustrator/friskos.png', alt: 'Ice cream illustrations created using clipping masks.', class: 'friskos' },
        { url: 'assets/img/illustrator/shoe.png', alt: 'High heel shoe illustration created using the Pen Tool and AI-generated fills.', class: 'shoe' },
        { url: 'assets/img/illustrator/ai_flashcard01.png', alt: 'Flashcard creation for Adobe Illustrator keyboard shortcuts.', class: 'ai_flash_card01' },
        { url: 'assets/img/illustrator/ai_flashcard02.png', alt: 'Flashcard creation for Adobe Illustrator keyboard shortcuts.', class: 'ai_flash_card02' },
        { url: 'assets/img/illustrator/ai_flashcard03.png', alt: 'Flashcard creation for Adobe Illustrator keyboard shortcuts.', class: 'ai_flash_card03' },
        { url: 'assets/img/illustrator/ai_flashcard04.png', alt: 'Flashcard creation for Adobe Illustrator keyboard shortcuts.', class: 'ai_flash_card04' },
        { url: 'assets/img/illustrator/logo_chocolat_blanc_pot.png', alt: 'Logo creation and product mockup on a white chocolate jar.', class: 'logo_chocolat_blanc_pot' },
        { url: 'assets/img/illustrator/logo_chocolat_blanc_tshirt.png', alt: 'Logo creation and mockup on a t-shirt featuring white chocolate branding.', class: 'logo_chocolat_blanc_tshirt' },
        { url: 'assets/img/draw/draw_nick_figma.jpg', img: 'assets/img/draw/raw_nick_figma.jpg', alt: 'FIGMA.nick-wilde', class: 'nick-wilde'},
        { url: 'assets/img/logos/plank_qfdn.png', img: 'assets/img/logos/plank_qfdn.png', alt: 'FIGMA.alt-qfdn',  class: 'logos' },
        { url: 'assets/img/plank_logos_adg.png', img: 'assets/img/plank_logos_adg.png', alt: 'FIGMA.alt-logos',  class: 'logos' },
        { url: 'assets/img/plank_logos_2_adg.png', img: 'assets/img/plank_logos_2_adg.png', alt: 'FIGMA.alt-logos', class: 'logos'  },
        { url: 'assets/img/logos/logo_vigna_2024.svg', alt: 'Vigna 2024', class: 'logos' },
        { url: 'assets/img/logos/container_vigna.svg', alt: 'Icon Container', class: 'logos' },
        { url: 'assets/img/logos/cameleon.png', alt: 'Chameleon Logo', class: 'logos' },
      ]
    }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openImageInModal(image: { url: string; alt: string, class: string }) {
    this.selectedImage = image;

    // Bootstrap modal logic
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
