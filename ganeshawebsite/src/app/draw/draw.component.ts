import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

declare var bootstrap: any; // Pour utiliser Bootstrap JS

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss'],
  imports: [CommonModule, TranslateModule, PageHeaderComponent]
})
export class DrawComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Logos',
      images: [
        { url: 'assets/img/draw/draw_wolverine.jpg', img: 'assets/img/draw/draw_wolverine.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_miles_morales.jpg', img: 'assets/img/draw/draw_miles_morales.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_spiderman.jpg', img: 'assets/img/draw/draw_spiderman.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_batman.jpg', img: 'assets/img/draw/draw_batman.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_kung_fu_panda.jpg', img: 'assets/img/draw/draw_kung_fu_panda.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_yellow_labrador.jpg', img: 'assets/img/draw/draw_yellow_labrador.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_donald_duck.jpg', img: 'assets/img/draw/draw_donald_duck.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_bluejay.jpg', img: 'assets/img/draw/draw_bluejay.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_santaclaus.jpg', img: 'assets/img/draw/draw_santaclaus.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_elfe.jpg', img: 'assets/img/draw/draw_elfe.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_grinch.jpg', img: 'assets/img/draw/draw_grinch.jpg', alt: 'draw', width: 15, loaded: false},
        { url: 'assets/img/draw/draw_mufasa.jpg', img: 'assets/img/draw/draw_mufasa.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_elsa.jpg', img: 'assets/img/draw/draw_elsa.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_beauty_disney.jpg', img: 'assets/img/draw/draw_beauty_disney.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_anna_frozen.jpg', img: 'assets/img/draw/draw_anna_frozen.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_bird.jpg', img: 'assets/img/draw/draw_bird.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_lion.jpg', img: 'assets/img/draw/draw_lion.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_judy_hopps_zootopia.jpg', img: 'assets/img/draw/draw_judy_hopps_zootopia.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_nick_wilde_zootopia.jpg', img: 'assets/img/draw/draw_nick_wilde_zootopia.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_owl.jpg', img: 'assets/img/draw/draw_owl.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_scoobydoo.jpg', img: 'assets/img/draw/draw_scoobydoo.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_skull.jpg', img: 'assets/img/draw/draw_skull.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_stitch.jpg', img: 'assets/img/draw/draw_stitch.jpg', alt: 'draw', width: 15, loaded: false },
        { url: 'assets/img/draw/draw_super_mario.jpg', img: 'assets/img/draw/draw_super_mario.jpg', alt: 'draw', width: 15, loaded: false },
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
