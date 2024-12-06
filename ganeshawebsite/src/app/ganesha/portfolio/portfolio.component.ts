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
      image: 'assets/architecture-thumbnail.jpg',
      gallery: Array(10).fill('assets/architecture-sample.jpg'), // Exemple de 10 images
    },
    {
      title: 'Visit Cards',
      description: 'Creative visit card designs.',
      image: 'assets/visit-cards-thumbnail.jpg',
      gallery: Array(10).fill('assets/visit-card-sample.jpg'), // Exemple de 10 images
    },
    // Ajoutez d'autres catégories ici
  ];

  selectedCategory: any = null;

  loadGallery(category: any): void {
    this.selectedCategory = category;
  }
}
