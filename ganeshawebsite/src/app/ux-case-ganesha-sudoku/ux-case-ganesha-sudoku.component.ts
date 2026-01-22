import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

declare var bootstrap: any; // Ajoutez cette déclaration pour utiliser Bootstrap JS
interface TimelineItem {
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-ux-case-ganesha-sudoku',
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent],
  templateUrl: './ux-case-ganesha-sudoku.component.html',
  styleUrl: './ux-case-ganesha-sudoku.component.scss'
})
export class UxCaseGaneshaSudokuComponent {

  selectedMockup: any = null;

  mockups = [
    {
      thumb: 'assets/img/ux/sudoku/sudoku_01.png',
      full: 'assets/img/ux/sudoku/sudoku_01.png',
      alt: 'UX_CASE_GANESHA_SUDOKU.mockups.alt1'
    },
    {
      thumb: 'assets/img/ux/sudoku/sudoku_02.png',
      full: 'assets/img/ux/sudoku/sudoku_02.png',
      alt: 'UX_CASE_GANESHA_SUDOKU.mockups.alt2'
    },{
      thumb: 'assets/img/ux/sudoku/sudoku_03.png',
      full: 'assets/img/ux/sudoku/sudoku_03.png',
      alt: 'UX_CASE_GANESHA_SUDOKU.mockups.alt3'
    },
    {
      thumb: 'assets/img/ux/sudoku/sudoku_04.png',
      full: 'assets/img/ux/sudoku/sudoku_04.png',
      alt: 'UX_CASE_GANESHA_SUDOKU.mockups.alt4'
    },
    // … tes 4 planches
  ];

  timeline: TimelineItem[] = [
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.tech.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.tech.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.structure.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.structure.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.generation.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.generation.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.uiux.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.uiux.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.methods.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.methods.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_SUDOKU.deployment.title',
      descKey: 'UX_CASE_GANESHA_SUDOKU.deployment.desc'
    }
  ];

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
    });
  }

  openMockup(mock: any) {
    this.selectedMockup = mock;
    const modalEl = document.getElementById('mockupModal');
    if (modalEl) {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }
  }
}
