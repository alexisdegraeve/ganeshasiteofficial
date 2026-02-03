import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

interface UxCaseItem {
  route: string;
  titleKey: string;
  subTitleKey: string;
  icon: string;
}


@Component({
  selector: 'app-ux-cases',
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent],
  templateUrl: './ux-cases.component.html',
  styleUrl: './ux-cases.component.scss'
})
export class UxCasesComponent {
    uxCases: UxCaseItem[] = [
    {
      route: '/ux-cases/ganesha-music',
      titleKey: 'UX_CASES.ganeshaMusic.title',
      subTitleKey: 'UX_CASES.ganeshaMusic.subtitle',
      icon: 'bi-folder'
    },
    {
      route: '/ux-cases/ganesha-fit',
      titleKey: 'UX_CASES.ganeshaFit.title',
      subTitleKey: 'UX_CASES.ganeshaFit.subtitle',
      icon: 'bi-folder'
    },
    {
      route: '/ux-cases/ganesha-sudoku',
      titleKey: 'UX_CASES.ganeshaSudoku.title',
      subTitleKey: 'UX_CASES.ganeshaSudoku.subtitle',
      icon: 'bi-folder'
    },
    {
      route: '/ux-cases/ganesha-battlefield',
      titleKey: 'UX_CASES.ganeshaBattlefield.title',
      subTitleKey: 'UX_CASES.ganeshaBattlefield.subtitle',
      icon: 'bi-folder'
    }
  ];

    constructor(private translate: TranslateService, private languageService: LanguageService) {
      this.languageService.currentLang$.subscribe((lang) => {
        this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
      });
    }

}
