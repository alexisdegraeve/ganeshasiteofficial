import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  imports: [CommonModule, TranslateModule, CarouselModule],
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent  {
  selectedCategory: any = null;

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
      }
    ]
  };

  constructor(private translate: TranslateService, private languageService: LanguageService, private cdr: ChangeDetectorRef) {
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
}
