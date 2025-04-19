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
        alt: 'Changement de la couleur des yeux 1',
        comment: 'Utilisation des modes de fusion et calques de réglage',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/card.jpg',
        alt: 'Changement de la couleur des yeux 2',
        comment: 'Autre méthode avec masque',
        imageLoaded: false
      },
      {
        img: 'assets/img/workshop/card.jpg',
        alt: 'Changement de la couleur des yeux 3',
        comment: 'Encore une variation sympa',
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
