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
      image: 'assets/img/portfolio/preview/games.png',
      linkInternal: '/games',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-brand-guidelines',
      description: 'PORTFOLIO.desc-brand-guidelines',
      image: 'assets/img/portfolio/preview/graphical_chart.png',
      linkInternal: '/brandguidelines',
      class: '',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-uxcases',
      description: 'PORTFOLIO.desc-uxcases',
      image: 'assets/img/portfolio/preview/ux_design_analyse.png',
      linkInternal: '/ux-cases',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-draw',
      description: 'PORTFOLIO.desc-workshop-draw',
      image: 'assets/img/portfolio/preview/drawing.png',
      linkInternal: '/draw',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-3D',
      description: 'PORTFOLIO.desc-3D',
      image: 'assets/img/portfolio/preview/3d.png',
      linkInternal: '/gallery3D',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-digital-draw',
      description: 'PORTFOLIO.desc-workshop-illustrator',
      image: 'assets/img/portfolio/preview/vector.png',
      linkInternal: '/illustrator',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-mockups',
      description: 'PORTFOLIO.desc-mockups',
      image: 'assets/img/portfolio/preview/wireframes.png',
      linkInternal: '/mockups',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-photoshop',
      description: 'PORTFOLIO.desc-workshop-photoshop',
      image: 'assets/img/portfolio/preview/digital_creation.png',
      linkInternal: '/photoshop',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-workshop-indesign',
      description: 'PORTFOLIO.desc-workshop-indesign',
      image: 'assets/img/portfolio/preview/publications.png',
      linkInternal: '/indesign',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-architecture',
      description: 'PORTFOLIO.desc-architecture',
      image: 'assets/img/portfolio/preview/architecture.png',
      linkInternal: '/galleryarch',
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-businesscards',
      description: 'PORTFOLIO.desc-businesscards',
      image: 'assets/img/portfolio/preview/business_cards.png',
      gallery: [
        'assets/img/card_visit_bert.jpg',
      ],
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-marcovigna',
      description: 'PORTFOLIO.desc-marcovigna',
      image: 'assets/img/portfolio/preview/marco_vigna.png',
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
      image: 'assets/img/portfolio/preview/mockup.png',
      download: 'assets/pdf/portfolio_adg.pdf', // Lien pour télécharger le PDF
      imageLoaded: false
    },
    {
      title: 'PORTFOLIO.title-ganeshalearning',
      description: 'PORTFOLIO.desc-ganeshalearning',
      image: 'assets/img/portfolio/preview/ganesha_learning.png',
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
