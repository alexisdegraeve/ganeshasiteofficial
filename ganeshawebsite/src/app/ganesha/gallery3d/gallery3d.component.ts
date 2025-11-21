import { CommonModule } from '@angular/common';
import { Component,  OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-gallery3d',
  templateUrl: './gallery3d.component.html',
  styleUrl: './gallery3d.component.scss',
  imports: [CommonModule, PageHeaderComponent]
})
export class Gallery3dComponent {
  selectedTab = 0;
  selectedImage: { img: string; alt: string; url?: string} | null = null;
  imageLoaded = false; // Etat pour déterminer si les images sont chargées

  archGallery = [
    {
      title: 'Workshop Blender',
      images: [
        { img: 'assets/img/3d/interior_design_2.png', alt: 'I followed the “Interior Design with Blender: Build an Advanced 3D Scene” tutorial to learn and improve 😊 Modeling, texturing, and lighting all done by me.' },
      ]
    },
    {
      title: 'Workshop 3ds Max',
      images: [
        { img: 'assets/img/3d/armchair.jpg', alt: ' I modeled a round sofa in an attic with a warm sunset HDRI atmosphere. Modeling, texturing, and lighting done by me 😄'},
        { img: 'assets/img/3d/swingchair.jpg', alt: 'A Swing Chair! Modeled in 3ds Max, with texturing and HDRI lighting all done by me ✨'},
        { img: 'assets/img/3d/cofee_machine.png', alt: 'A coffee machine fully modeled in 3ds Max, based on a tutorial! Modeling, texturing, and lighting all done by me. What else? 😉' },
        { img: 'assets/img/3d/fauteuil_barcelona.jpg', alt: 'I recreated the iconic Barcelona Chair following a tutorial in 3ds Max! A great exercise in modeling, texturing, and lighting.' },
        { img: 'assets/img/3d/orange_juice.jpg', alt: '“Product Presentation Workflow” tutorial by Zaheer Mukhtar in 3ds Max! I modeled, lit, and textured my own scene — a great exercise to improve my product visualization skills' },
        { img: 'assets/img/3d/bedroom.jpg', alt: ' I created a bed in 3ds Max using the Cloth technique for the sheets — showing visible stitches and detailed materials, modeling, texturing, and lighting, all done by me.'},
      ]
    },
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

  ngOnInit() {
    this.loadImages(); // Charger les images immédiatement lors de l'initialisation du composant
  }

  ngAfterViewInit() {
    this.loadImages(); // Charge les images immédiatement après le rendu du composant
  }

  selectTab(index: number) {
    this.selectedTab = index;
    this.imageLoaded = false; // Réinitialise le chargement des images pour l'onglet sélectionné
    this.loadImages(); // Charge à nouveau les images de l'onglet sélectionné
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

    // Charge les images de l'onglet actuel
    loadImages() {
      const currentImages = this.archGallery[this.selectedTab].images;

      // Utilisation de `fromEvent` pour attendre que chaque image soit chargée
      fromEvent(window, 'load')
        .pipe(
          switchMap(() =>
            from(currentImages.map(image => new Promise<void>((resolve, reject) => { // Ajout du type void à la Promise
              const img = new Image();
              img.onload = () => {
                this.imageLoaded = true; // Met à jour l'état `imageLoaded` après le chargement de chaque image
                resolve(); // Fonction de résolution de la Promise correctement formée
              };
              img.onerror = reject;
              img.src = image.img;
            })))
          )
        )
        .subscribe({
          error: (error) => console.error('Erreur de chargement de l\'image:', error)
        });
    }

    // Cette méthode est appelée lorsque chaque image est chargée
    onImageLoad() {
      // Maintient `imageLoaded` à `false` jusqu'à ce que toutes les images de l'onglet soient chargées
      this.imageLoaded = true; // Mise à jour correcte du skeleton
    }
}
