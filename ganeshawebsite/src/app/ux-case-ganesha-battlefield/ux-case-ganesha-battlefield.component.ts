import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

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
}
