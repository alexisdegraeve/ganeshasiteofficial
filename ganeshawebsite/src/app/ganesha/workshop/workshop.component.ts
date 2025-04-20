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
        img: 'assets/img/workshop/card.jpg',
        alt: 'WORKSHOP.alt-eye',
        comment: 'WORKSHOP.comment-eye',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/card.jpg',
        alt: 'WORKSHOP.alt-masque',
        comment: 'WORKSHOP.comment-masque',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/card.jpg',
        alt: 'WORKSHOP.alt-variation',
        comment: 'WORKSHOP.comment-variation',
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
