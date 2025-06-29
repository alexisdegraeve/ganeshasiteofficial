import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [TranslateModule, RouterModule],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isLoadingFooter = true;

  constructor(private translate: TranslateService, private languageService: LanguageService ) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
    });
  }

}
