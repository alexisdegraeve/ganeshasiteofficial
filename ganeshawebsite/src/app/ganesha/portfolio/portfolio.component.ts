import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [CommonModule]
})
export class PortfolioComponent {
  categories = [
    {
      title: 'Architecture',
      description: 'Explore our stunning architecture projects.',
      image: 'assets/img/flat_02.jpg',
      gallery: Array(10).fill('assets/flat_02-sample.jpg'), // Exemple de 10 images
    },
    {
      title: 'Visit Cards',
      description: 'Creative visit card designs.',
      image: 'assets/img/card_visit_bert02.jpg',
      gallery: Array(10).fill('assets/visit-card-sample.jpg'), // Exemple de 10 images
    },
    {
      title: 'Marco Vigna',
      description: 'Website container for Marco Vigna.',
      image: 'assets/img/vigna_container.jpg',
      link: 'http://vigna.be',
    },
    {
      title: 'Expense Management',
      description: 'Expense management tool for Marco Vigna.',
      image: 'assets/img/vigna_gestionfrais02.jpeg',
    },
    {
      title: 'Professional Mockup',
      description: 'Find professional mockups for your projects.',
      image: 'assets/img/portfolio.jpg',
      download: 'assets/portfolio_adg.pdf', // Lien pour télécharger le PDF
    },
    {
      title: 'Logo Design',
      description: 'Creative logo designs for your brand.',
      image: 'assets/img/logo_01.png',
    },
  ];

  selectedCategory: any = null;

  loadGallery(category: any): void {
    this.selectedCategory = category;
  }
}
