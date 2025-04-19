import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
declare var bootstrap: any;

@Component({
  selector: 'app-workshop',
  imports: [CommonModule, TranslateModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.scss'
})
export class WorkshopComponent implements AfterViewInit  {
  selectedCategory: any = null;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  categories = [
    {
      title: 'Photoshop: Changement des yeux',
      images: [
        {
          img: 'assets/img/workshop/card.jpg',
          alt: 'Changement de la couleur des yeux',
          comment: 'Utilisation des modes de fusion et calques de réglage',
          imageLoaded: false
        },
      ]
    },
    {
      title: 'Illustrator: Logo vectoriel',
      images: [
        {
          img: 'assets/img/workshop/card.jpg',
          alt: 'Création d’un logo',
          comment: 'Outils plume, Pathfinder et couleurs Pantone',
          imageLoaded: false
        }
      ]
    },
    {
      title: 'InDesign: Mise en page magazine',
      images: [
        {
          img: 'assets/img/workshop/card.jpg',
          alt: 'Double page magazine',
          comment: 'Utilisation des grilles et styles de paragraphe',
          imageLoaded: false
        }
      ]
    },
    {
      title: 'Photoshop: Photomontage créatif',
      images: [
        {
          img: 'assets/img/workshop/card.jpg',
          alt: 'Composition artistique',
          comment: 'Masques de fusion, ajustements et textures',
          imageLoaded: false
        }
      ]
    }
  ];

  constructor(private translate: TranslateService, private languageService: LanguageService,   private cdr: ChangeDetectorRef) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
    });

    // Chargement initial
    this.loadGallery(this.categories[0]);
  }
  ngAfterViewInit(): void {
    if (this.carousel) {
      new bootstrap.Carousel(this.carousel.nativeElement);
    }
  }

  loadGallery(category: any): void {
    this.selectedCategory = category;
  }

  onImageLoad(index: number): void {
    if (this.selectedCategory?.images[index]) {
      this.selectedCategory.images[index].imageLoaded = true;
    }
  }


}
