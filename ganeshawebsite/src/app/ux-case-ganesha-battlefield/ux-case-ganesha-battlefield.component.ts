import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

interface TimelineItem {
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-ux-case-ganesha-battlefield',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './ux-case-ganesha-battlefield.component.html',
  styleUrls: ['./ux-case-ganesha-battlefield.component.scss']
})
export class UxCaseGaneshaBattlefieldComponent {

  selectedMockup: any = null;

  // lien vers ton jeu — à remplacer si besoin
  gameLink = 'https://www.battleship.ganesha.ovh/';

  mockups = [
    {
      thumb: 'assets/img/ux/battlefield/battlefield_01.png',
      full:  'assets/img/ux/battlefield/battlefield_01.png',
      alt:   'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt1',
      label: 'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt1'
    },
    {
      thumb: 'assets/img/ux/battlefield/battlefield_02.png',
      full:  'assets/img/ux/battlefield/battlefield_02.png',
      alt:   'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt2',
      label: 'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt2'
    },
    {
      thumb: 'assets/img/ux/battlefield/battlefield_03.png',
      full:  'assets/img/ux/battlefield/battlefield_03.png',
      alt:   'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt3',
      label: 'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt3'
    },
    {
      thumb: 'assets/img/ux/battlefield/battlefield_04.png',
      full:  'assets/img/ux/battlefield/battlefield_04.png',
      alt:   'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt4',
      label: 'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt4'
    },
    {
      thumb: 'assets/img/ux/battlefield/battlefield_05.png',
      full:  'assets/img/ux/battlefield/battlefield_05.png',
      alt:   'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt5',
      label: 'UX_CASE_GANESHA_BATTLEFIELD.mockups.alt5'
    }
  ];

  timeline: TimelineItem[] = [
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.tech.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.tech.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.structure.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.structure.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.generation.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.generation.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.uiux.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.uiux.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.methods.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.methods.desc'
    },
    {
      titleKey: 'UX_CASE_GANESHA_BATTLEFIELD.deployment.title',
      descKey: 'UX_CASE_GANESHA_BATTLEFIELD.deployment.desc'
    }
  ];

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
    });
  }
}
