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
  selector: 'app-ux-case-ganesha-battlefield',
  imports: [CommonModule, RouterModule, TranslateModule, PageHeaderComponent],
  templateUrl: './ux-case-ganesha-battlefield.component.html',
  styleUrl: './ux-case-ganesha-battlefield.component.scss'
})
export class UxCaseGaneshaBattlefieldComponent {
  timeline: TimelineItem[] = [
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.objective.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.objective.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.placement.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.placement.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.backtracking.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.backtracking.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.flow.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.flow.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.uxpoints.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.uxpoints.desc'
    }
  ];

        constructor(private translate: TranslateService, private languageService: LanguageService) {
          this.languageService.currentLang$.subscribe((lang) => {
            this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
          });
        }
}
