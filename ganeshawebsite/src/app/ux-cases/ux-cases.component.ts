import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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

}
