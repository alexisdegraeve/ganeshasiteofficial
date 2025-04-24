import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  imports: [CommonModule, TranslateModule, CarouselModule, ModalModule ],
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent  {
  selectedCategory: any = null;
  selectedImage: any = null;
  bsModalRef: BsModalRef | null = null;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  category = {
    title: 'Photoshop: Changement des yeux',
    images: [
      {
        img: 'assets/img/workshop/workshop_visage.jpg',
        alt: 'WORKSHOP.alt-eye-enhancement',
        comment: 'WORKSHOP.comment-eye-enhancement',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_barbie.jpg',
        alt: 'WORKSHOP.alt-object-selection-mirror',
        comment: 'WORKSHOP.comment-object-selection-mirror',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_taxi.jpg',
        alt: 'WORKSHOP.alt-color-overlay-destruction',
        comment: 'WORKSHOP.comment-color-overlay-destruction',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_cat.jpg',
        alt: 'WORKSHOP.alt-clone-tool-photoshop',
        comment: 'WORKSHOP.comment-clone-tool-photoshop',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_computer.jpg',
        alt: 'WORKSHOP.alt-animal-relief-mask-shadow',
        comment: 'WORKSHOP.comment-animal-relief-mask-shadow',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_cover.jpg',
        alt: 'WORKSHOP.alt-bw-color-cover',
        comment: 'WORKSHOP.comment-bw-color-cover',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/workshop_water.jpg',
        alt: 'WORKSHOP.alt-water-text-effect',
        comment: 'WORKSHOP.comment-water-text-effect',
        imageLoaded: false
      }
    ]
  };

  constructor(private translate: TranslateService, private languageService: LanguageService, private cdr: ChangeDetectorRef, private modalService: BsModalService) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
    });

    // Chargement initial
    this.loadGallery(this.category);
  }


  loadGallery(category: any): void {
    this.selectedCategory = category;
  }

  onImageLoad(image: any): void {
    image.imageLoaded = true;
    this.cdr.detectChanges();
  }


 // Ouvrir le modal avec l'image sélectionnée
 openModal(image: any): void {
  this.selectedImage = image;
  // Ouvrir le modal
  this.bsModalRef = this.modalService.show(this.modalTemplate);
}

// Fermer le modal
closeModal(): void {
  this.bsModalRef?.hide();
}

}
