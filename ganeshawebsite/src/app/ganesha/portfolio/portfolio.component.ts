import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent]
})
export class PortfolioComponent {
  categories = [
    {
      title: 'PORTFOLIO.title-games',
      description: 'PORTFOLIO.desc-games',
      image: 'assets/img/games.jpg',
      linkInternal: '/games',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-brand-guidelines',
      description: 'PORTFOLIO.desc-brand-guidelines',
      image: 'assets/ganesha-logo-h-02.svg',
      linkInternal: '/brandguidelines',
      class: 'guidelines',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-draw',
      description: 'PORTFOLIO.desc-workshop-draw',
      image: 'assets/img/draw/draw_nick_wilde_zootopia.jpg',
      linkInternal: '/figma',
      class: 'draw',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-figma',
      description: 'PORTFOLIO.desc-workshop-figma',
      image: 'assets/img/figma-logo.svg',
      linkInternal: '/figma',
      class: 'figma',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-photoshop',
      description: 'PORTFOLIO.desc-workshop-photoshop',
      image: 'assets/img/designer.jpg',
      linkInternal: '/photoshop',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-indesign',
      description: 'PORTFOLIO.desc-workshop-indesign',
      image: 'assets/img/logo_indesign.svg',
      linkInternal: '/indesign',
      class: 'logo-adobe',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-illustrator',
      description: 'PORTFOLIO.desc-workshop-illustrator',
      image: 'assets/img/logo_illustrator.svg',
      class: 'logo-adobe',
      linkInternal: '/illustrator',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-architecture',
      description: 'PORTFOLIO.desc-architecture',
      image: 'assets/img/flat_02.jpg',
      linkInternal: '/galleryarch',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-businesscards',
      description: 'PORTFOLIO.desc-businesscards',
      image: 'assets/img/card_visit_bert02.jpg',
      gallery: [
        'assets/img/card_visit_bert.jpg',
      ],
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-marcovigna',
      description: 'PORTFOLIO.desc-marcovigna',
      image: 'assets/img/vigna_container.jpg',
      link: 'http://vigna.be',
      imageLoaded: false
    },
    // {
    //   title: 'PORTFOLIO.title-expensemanagement',
    //   description: 'PORTFOLIO.desc-expensemanagement',
    //   image: 'assets/img/vigna_gestionfrais02.jpeg',
    //   imageLoaded: false
    // },
    {
      title: 'PORTFOLIO.title-promockup',
      description: 'PORTFOLIO.desc-promockup',
      image: 'assets/img/portfolio.jpg',
      download: 'assets/pdf/portfolio_adg.pdf', // Lien pour télécharger le PDF
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-3D',
      description: 'PORTFOLIO.desc-3D',
      image: 'assets/img/3d_elephant.jpeg',
      linkInternal: '/gallery3D',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-logodesign',
      description: 'PORTFOLIO.desc-logodesign',
      image: 'assets/img/logos/logo_folder.png',
      linkInternal: '/gallerylogo',
      class: 'logo',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-mockups',
      description: 'PORTFOLIO.desc-mockups',
      image: 'assets/img/mockups.jpeg',
      linkInternal: '/mockups',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-ganeshalearning',
      description: 'PORTFOLIO.desc-ganeshalearning',
      image: 'assets/img/youtube_ganesha_learning.jpg',
      link: 'https://www.youtube.com/@alexisdegraeve5',
      imageLoaded: false
    },
  ];

  selectedCategory: any = null;

  loadGallery(category: any): void {
    this.selectedCategory = category;
  }

  onImageLoad(index: number): void {
    this.categories[index].imageLoaded = true; // Marque l'image comme chargée
  }

    constructor(private translate: TranslateService, private languageService: LanguageService) {
      this.languageService.currentLang$.subscribe((lang) => {
        this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
      });
    }
}
