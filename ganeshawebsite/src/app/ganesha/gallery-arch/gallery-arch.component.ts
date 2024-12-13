import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

declare var bootstrap: any; // Déclarez Bootstrap JS pour utilisation

@Component({
  selector: 'app-gallery-arch',
  templateUrl: './gallery-arch.component.html',
  styleUrls: ['./gallery-arch.component.scss'],
  imports: [CommonModule]
})
export class GalleryArchComponent implements OnInit {
  selectedTab = 0;
  selectedImage: { img: string; alt: string; url?: string } | null = null;
  imageLoaded = false; // Etat pour déterminer si les images sont chargées

  archGallery = [
    {
      title: 'Building View',
      images: [
        { img: 'assets/img/outside/flat_01.jpg', alt: 'Building View 1' },
        { img: 'assets/img/outside/flat_02.jpg', alt: 'Building View 2' },
      ]
    },
    {
      title: 'Flat A',
      images: [
        { img: 'assets/img/flata/flat_04.jpg', alt: 'Flat A - Bed room', url: 'https://ganesha.ovh/flats/360degre/flat01/bedroom/' },
        { img: 'assets/img/flata/flat_05.jpg', alt: 'Flat A - Living room', url: 'https://ganesha.ovh/flats/360degre/flat01/livingroom/' },
        { img: 'assets/img/flata/flat_06.jpg', alt: 'Flat A - Shower room', url: 'https://ganesha.ovh/flats/360degre/flat01/showerroom/' },
        { img: 'assets/img/flata/flat_07.jpg', alt: 'Flat A - Toilet room', url: 'https://ganesha.ovh/flats/360degre/flat01/wcroom/' },
      ]
    },
    {
      title: 'Flat B',
      images: [
        { img: 'assets/img/flatb/flat_08.jpg', alt: 'Flat B - Living room', url: 'https://ganesha.ovh/flats/360degre/flat02/livingroom/'  },
        { img: 'assets/img/flatb/flat_09.jpg', alt: 'Flat B - Living room', url: 'https://ganesha.ovh/flats/360degre/flat02/livingroom02/'  },
        { img: 'assets/img/flatb/flat_10.jpg', alt: 'Flat B - Living room - Kitchen', url: 'https://ganesha.ovh/flats/360degre/flat02/livingroom03/'  },
        { img: 'assets/img/flatb/flat_11.jpg', alt: 'Flat B - Bath room', url: 'https://ganesha.ovh/flats/360degre/flat02/bathroom/'  },
        { img: 'assets/img/flatb/flat_12.jpg', alt: 'Flat B - Shower room', url: 'https://ganesha.ovh/flats/360degre/flat02/showerroom/'  },
        { img: 'assets/img/flatb/flat_13.jpg', alt: 'Flat B - Utility room', url: 'https://ganesha.ovh/flats/360degre/flat02/utilityroom/'  },
        { img: 'assets/img/flatb/flat_14.jpg', alt: 'Flat B - Wc room', url: 'https://ganesha.ovh/flats/360degre/flat02/wcroom/'  },
        { img: 'assets/img/flatb/flat_15.jpg', alt: 'Flat B - Work room', url: 'https://ganesha.ovh/flats/360degre/flat02/workroom/'  },
      ]
    }
  ];

  ngOnInit() {
    this.loadImages(); // Charger les images immédiatement lors de l'initialisation du composant
  }

  selectTab(index: number) {
    this.selectedTab = index;
    this.imageLoaded = false; // Réinitialise le chargement des images pour l'onglet sélectionné
    this.loadImages(); // Charge à nouveau les images de l'onglet sélectionné
  }

  openImageInModal(image: { img: string; alt: string; url?: string }) {
    this.selectedImage = image;

    // Logique Bootstrap pour le modal
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Charge les images de l'onglet actuel
  loadImages() {
    const currentImages = this.archGallery[this.selectedTab].images;

    // Utilisation de `fromEvent` pour attendre que chaque image soit chargée
    fromEvent(window, 'load')
      .pipe(
        switchMap(() =>
          from(currentImages.map(image => new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = image.img;
          })))
        ),
        tap(() => this.imageLoaded = true) // Met à jour l'état `imageLoaded` lorsque toutes les images sont chargées
      )
      .subscribe({
        error: (error) => console.error('Erreur de chargement de l\'image:', error)
      });
  }

  // Cette méthode est appelée lorsque chaque image est chargée
  onImageLoad() {
    // Maintient `imageLoaded` à `false` jusqu'à ce que toutes les images de l'onglet soient chargées
    this.imageLoaded = false; // Mise à jour correcte du skeleton
  }
}
