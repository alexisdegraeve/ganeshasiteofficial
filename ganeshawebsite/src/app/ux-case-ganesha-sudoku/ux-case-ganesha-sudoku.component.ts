import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

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

}
