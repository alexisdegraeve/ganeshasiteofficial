import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  // Method to show galleries (for the sake of this example, log in the console)
  showGallery(type: string): void {
    console.log(`Gallery type: ${type} clicked.`);
    // Here you can implement routing or modal logic to show the gallery
  }
}
