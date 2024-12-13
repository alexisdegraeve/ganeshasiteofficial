import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class PortfolioComponent {
  categories = [
    {
      title: 'Architecture',
      description: 'Explore our stunning architecture projects.',
      image: 'assets/img/flat_02.jpg',
      linkInternal: '/galleryarch',
      imageLoaded: false
    },
    {
      title: 'Visit Cards',
      description: 'Creative visit card designs.',
      image: 'assets/img/card_visit_bert02.jpg',
      gallery: Array(10).fill('assets/visit-card-sample.jpg'), // Exemple de 10 images
      imageLoaded: false
    },
    {
      title: 'Marco Vigna',
      description: 'Website container for Marco Vigna.',
      image: 'assets/img/vigna_container.jpg',
      link: 'http://vigna.be',
      imageLoaded: false
    },
    {
      title: 'Expense Management',
      description: 'Expense management tool for Marco Vigna.',
      image: 'assets/img/vigna_gestionfrais02.jpeg',
      imageLoaded: false
    },
    {
      title: 'Professional Mockup',
      description: 'Find professional mockups for your projects.',
      image: 'assets/img/portfolio.jpg',
      download: 'assets/portfolio_adg.pdf', // Lien pour télécharger le PDF
      imageLoaded: false
    },
    {
      title: '3D',
      description: 'Creative 3D with 3DS Max.',
      image: 'assets/img/3d_elephant.jpeg',
      linkInternal: '/gallery3D',
      imageLoaded: false
    },
    {
      title: 'Logo Design',
      description: 'Creative logo designs for your brand.',
      image: 'assets/img/logos/logo_folder.png',
      linkInternal: '/gallerylogo',
      class: 'logo',
      imageLoaded: false
    },
    {
      title: 'Ganesha learning',
      description: '🌟 In this channel, we provide comprehensive tutorials on Angular 19 and other essential frontend topics. Master HTML, CSS, and Angular\'s robust framework to build modern web applications.',
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
}
