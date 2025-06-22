import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/page-header/page-header.component';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS

@Component({
  selector: 'app-mockups',
  templateUrl: './mockups.component.html',
  styleUrls: ['./mockups.component.scss'],
  imports: [CommonModule, PageHeaderComponent]
})
export class MockupsComponent {
  selectedTab = 0;
  selectedImage: { url: string; alt: string } | null = null;

  archGallery = [
    {
      title: 'Mockups',
      images: [
        { url: 'assets/img/mockups/hackaton2024/priflex.jpeg', alt: 'Hackaton 2024' },
        // { url: 'assets/img/mockups/iba_pridex/pridex_logo.svg', alt: 'IBA Pridex' },
      ]
    },
    // {
    //   title: 'MYQA Ion',
    //   images: [
    //     { url: 'assets/img/mockups/myqaion/my_qa_ion_portal.png', alt: 'IBA MyQAIon'},
    //     { url: 'assets/img/mockups/myqaion/my_qa_ion_list_patient.png', alt: 'IBA MyQAIon'},
    //     { url: 'assets/img/mockups/myqaion/my_qa_ion_gantry_angle_sensor.png', alt: 'IBA MyQAIon'},
    //   ]
    // }
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  openImageInModal(image: { url: string; alt: string }) {
    this.selectedImage = image;

    // Bootstrap modal logic
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
